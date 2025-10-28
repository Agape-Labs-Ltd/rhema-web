import { useState, useEffect } from "react";
import { StartScreen } from "@/components/quiz/StartScreen";
import { GameScreen } from "@/components/quiz/GameScreen";
import { ScoreScreen } from "@/components/quiz/ScoreScreen";
import { LeaderboardModal } from "@/components/quiz/LeaderboardModal";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import questionsData from "@/questions.json";

interface Question {
  text: string;
  options: string[];
  correct_index: number;
}

type GameState = "start" | "playing" | "score";

const SEEDING_NAMES = [
  "Mary", "lion87", "g__i", "sam", "David_P", "GraceNotes", "TruthSeeker22",
  "John_117", "Psalm_Reader", "HopefulHeart", "Faith_Walker", "witness_in_training",
  "Mark", "Luke", "Sarah_J", "c_s_lewis_fan", "BibleStudent", "Gospel_Gunner",
  "Disciple_Mike", "redeemed_soul", "PrayerWarrior", "Scribe_07", "TheFisherman",
  "NoahB", "Esther_Q", "Paul_s_Letter", "Shepherd_King", "Genesis_Fan",
  "just_a_pilgrim", "Rejoice_Always", "follower", "A_B_C", "Test_User",
  "lion_and_lamb", "AlphaOmega", "Sunday_Best", "Amen_88", "KJV_Only",
  "NIV_Reader", "Theo_Geek", "Grace_filled", "PraiseHim", "user_1234",
  "Bethlehem_Star", "Cross_Carrier", "Sower_of_Seeds", "Jacob_T", "rachel",
  "Solomon_wise"
];

const Quiz = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState<Array<{ name: string; score: number }>>([]);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const { toast } = useToast();

  // Load questions on mount
  useEffect(() => {
    setAllQuestions(questionsData);
  }, []);

  // Load leaderboard
  const loadLeaderboard = async () => {
    const startOfHour = new Date();
    startOfHour.setMinutes(0, 0, 0);

    const { data, error } = await supabase
      .from("leaderboard")
      .select("name, score")
      .gte("created_at", startOfHour.toISOString())
      .order("score", { ascending: false })
      .limit(10);

    if (error) {
      console.error("Error loading leaderboard:", error);
      return [];
    }

    // Pad with dummy users if needed
    const entries = data || [];
    while (entries.length < 10) {
      const randomName = SEEDING_NAMES[Math.floor(Math.random() * SEEDING_NAMES.length)];
      const randomScore = Math.floor(Math.random() * 600) + 600;
      entries.push({ name: randomName, score: randomScore });
    }

    setLeaderboard(entries);
    return entries;
  };

  useEffect(() => {
    loadLeaderboard();
  }, [gameState]);

  const startGame = () => {
    // Select 10 random questions
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    setQuestions(selected);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState("playing");
  };

  const handleAnswer = (selectedIndex: number, timeRemaining: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct_index;

    if (isCorrect) {
      const points = Math.round(100 + (100 * (timeRemaining / 10)));
      setScore((prev) => prev + points);
    }

    // Move to next question or end game
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState("score");
    }
  };

  const handleSaveScore = async (name: string, email: string) => {
    // Insert into leaderboard
    const { error: leaderboardError } = await supabase
      .from("leaderboard")
      .insert({ name, score });

    if (leaderboardError) {
      console.error("Error saving to leaderboard:", leaderboardError);
      throw leaderboardError;
    }

    // Insert or update leads
    const { data: existingLead } = await supabase
      .from("leads")
      .select("high_score")
      .eq("email", email)
      .single();

    if (existingLead) {
      // Update only if new score is higher
      if (score > existingLead.high_score) {
        await supabase
          .from("leads")
          .update({ high_score: score, name })
          .eq("email", email);
      }
    } else {
      // Insert new lead
      await supabase
        .from("leads")
        .insert({ email, name, high_score: score });
    }

    // Reload leaderboard
    await loadLeaderboard();
  };

  const handlePlayAgain = () => {
    setGameState("start");
  };

  if (gameState === "start") {
    return (
      <>
        <StartScreen
          onStart={startGame}
          onShowLeaderboard={() => setShowLeaderboardModal(true)}
        />
        <LeaderboardModal
          isOpen={showLeaderboardModal}
          onClose={() => setShowLeaderboardModal(false)}
          leaderboard={leaderboard}
        />
      </>
    );
  }

  if (gameState === "playing" && questions.length > 0) {
    return (
      <GameScreen
        question={questions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        score={score}
        onAnswer={handleAnswer}
      />
    );
  }

  if (gameState === "score") {
    return (
      <ScoreScreen
        score={score}
        leaderboard={leaderboard}
        onPlayAgain={handlePlayAgain}
        onSaveScore={handleSaveScore}
      />
    );
  }

  return null;
};

export default Quiz;

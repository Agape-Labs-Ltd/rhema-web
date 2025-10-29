import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Question {
  text: string;
  options: string[];
  correct_index: number;
}

interface GameScreenProps {
  question: Question;
  questionNumber: number;
  score: number;
  onAnswer: (selectedIndex: number, timeRemaining: number) => void;
}

export const GameScreen = ({ question, questionNumber, score, onAnswer }: GameScreenProps) => {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Audio refs
  const correctSound = new Audio("/correct.mp3");
  const incorrectSound = new Audio("/incorrect.mp3");
  const timerTickSound = new Audio("/timer_tick.mp3");

  useEffect(() => {
    setTimeRemaining(10);
    setSelectedIndex(null);
    setShowFeedback(false);

    let currentTime = 10;
    let hasAnswered = false;

    const timer = setInterval(() => {
      currentTime -= 1;
      setTimeRemaining(currentTime);

      // Play tick sound in final 3 seconds (including 0)
      if (currentTime <= 3 && currentTime >= 0) {
        timerTickSound.play().catch(() => {});
      }

      // Auto-advance when timer runs out
      if (currentTime <= 0 && !hasAnswered) {
        hasAnswered = true;
        clearInterval(timer);
        
        // Wait for bar to fully empty (1000ms transition) before showing feedback
        setTimeout(() => {
          // Stop tick sound exactly when "Incorrect!" appears
          timerTickSound.pause();
          timerTickSound.currentTime = 0;
          
          setSelectedIndex(-1);
          setShowFeedback(true);
          incorrectSound.play().catch(() => {});
          
          setTimeout(() => {
            onAnswer(-1, 0);
          }, 1000);
        }, 1000);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      // Stop any playing tick sound when moving to next question
      timerTickSound.pause();
      timerTickSound.currentTime = 0;
    };
  }, [question]);

  const handleAnswer = (index: number) => {
    if (showFeedback) return;

    setSelectedIndex(index);
    setShowFeedback(true);

    const isCorrect = index === question.correct_index;
    if (isCorrect) {
      correctSound.play().catch(() => {});
    } else {
      incorrectSound.play().catch(() => {});
    }

    setTimeout(() => {
      onAnswer(index, timeRemaining);
    }, 1000);
  };

  const getTimerColor = () => {
    if (timeRemaining >= 6) return "bg-green-500";
    if (timeRemaining >= 3) return "bg-amber-500";
    return "bg-red-500";
  };

  const getButtonClass = (index: number) => {
    if (!showFeedback) return "";
    if (index === question.correct_index) return "bg-green-500 text-white";
    if (index === selectedIndex && index !== question.correct_index) return "bg-red-500 text-white";
    return "";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 pt-4">
        <div className="text-lg font-semibold text-foreground">
          Question {questionNumber}/10
        </div>
        <div className="text-lg font-semibold text-primary">
          Score: {score}
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center space-y-8 max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-serif text-center text-foreground leading-relaxed">
          {question.text}
        </h2>

        {/* Feedback */}
        {showFeedback && (
          <div className="text-center space-y-2">
            <div className={`text-3xl font-bold ${selectedIndex === question.correct_index ? "text-green-500" : "text-red-500"}`}>
              {selectedIndex === question.correct_index ? "Correct!" : "Incorrect!"}
            </div>
            {selectedIndex === question.correct_index && (
              <div className="text-2xl font-semibold text-primary animate-scale-in">
                +{Math.round(100 + (100 * (timeRemaining / 10)))}
              </div>
            )}
          </div>
        )}

        {/* Options */}
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showFeedback}
              className={`h-16 text-lg ${getButtonClass(index)}`}
              variant="outline"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      {/* Timer Bar */}
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-8">
        <div
          className={`h-full transition-all duration-1000 ease-linear ${getTimerColor()}`}
          style={{ width: `${(timeRemaining / 10) * 100}%` }}
        />
      </div>
    </div>
  );
};

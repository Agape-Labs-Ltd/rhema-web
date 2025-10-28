import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { LeaderboardList } from "./LeaderboardList";
import { EmailCaptureModal } from "./EmailCaptureModal";
import { useState } from "react";

interface ScoreScreenProps {
  score: number;
  leaderboard: Array<{ name: string; score: number }>;
  onPlayAgain: () => void;
  onSaveScore: (name: string, email: string) => Promise<void>;
}

export const ScoreScreen = ({ score, leaderboard, onPlayAgain, onSaveScore }: ScoreScreenProps) => {
  const [showModal, setShowModal] = useState(true);
  const [scoreSaved, setScoreSaved] = useState(false);

  const handleSaveScore = async (name: string, email: string) => {
    await onSaveScore(name, email);
    setScoreSaved(true);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Back Link */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm">Back to Home</span>
      </Link>

      {/* Score Display */}
      <div className="text-center space-y-6 max-w-md mb-12">
        <h1 className="text-5xl font-bold text-primary font-serif">Game Over!</h1>
        <div className="space-y-2">
          <p className="text-2xl text-muted-foreground">Your Score:</p>
          <p className="text-6xl font-bold text-foreground">{score}</p>
        </div>

        {/* Leaderboard */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">This Hour's Top 10</h2>
          <LeaderboardList leaderboard={leaderboard} compact />
        </div>
      </div>

      {/* CTAs */}
      <div className="space-y-4 w-full max-w-md">
        <a href="https://testflight.apple.com/join/8rKnsebm" target="_blank" rel="noopener noreferrer" className="block">
          <Button size="lg" className="w-full h-14 text-lg font-semibold">
            Download the Full App
          </Button>
        </a>
        <Button
          onClick={onPlayAgain}
          size="lg"
          variant="outline"
          className="w-full h-14 text-lg font-semibold"
        >
          Play Again
        </Button>
      </div>

      {/* Email Capture Modal */}
      {showModal && !scoreSaved && (
        <EmailCaptureModal
          onSubmit={handleSaveScore}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

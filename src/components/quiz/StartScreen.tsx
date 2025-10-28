import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import rhemaLogo from "@/assets/rhema_logo_light.svg";

interface StartScreenProps {
  onStart: () => void;
  onShowLeaderboard: () => void;
}

export const StartScreen = ({ onStart, onShowLeaderboard }: StartScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <Link to="/">
          <img src={rhemaLogo} alt="Rhema Logo" className="h-8 w-auto cursor-pointer" />
        </Link>
      </div>

      {/* Leaderboard Icon */}
      <button
        onClick={onShowLeaderboard}
        className="absolute top-6 right-6 text-4xl hover:scale-110 transition-transform"
        aria-label="View Leaderboard"
      >
        🏆
      </button>

      {/* Main Content */}
      <div className="text-center space-y-8 max-w-md">
        <h1 className="text-5xl font-bold text-primary font-serif">
          Bible Quiz
        </h1>
        <p className="text-xl text-muted-foreground">
          Test your Scripture knowledge in this fast-paced challenge!
        </p>
        <Button
          onClick={onStart}
          size="lg"
          className="w-full h-16 text-2xl font-semibold rounded-xl"
        >
          START GAME
        </Button>
      </div>
    </div>
  );
};

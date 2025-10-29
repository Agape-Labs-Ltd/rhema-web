import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { LeaderboardList } from "./LeaderboardList";
import { useState, useEffect } from "react";

interface ScoreScreenProps {
  score: number;
  leaderboard: Array<{ name: string; score: number }>;
  onPlayAgain: () => void;
  onSaveScore: (name: string, email: string) => Promise<void>;
}

export const ScoreScreen = ({ score, leaderboard, onPlayAgain, onSaveScore }: ScoreScreenProps) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userRank, setUserRank] = useState<number | null>(null);
  
  // Check if user made top 10
  const madeTop10 = leaderboard.length < 10 || score > leaderboard[leaderboard.length - 1].score;
  
  // Calculate where user would rank
  const calculateRank = () => {
    let rank = 1;
    for (const entry of leaderboard) {
      if (score > entry.score) break;
      rank++;
    }
    return rank;
  };

  const potentialRank = calculateRank();

  // Show confetti effect for top 10
  useEffect(() => {
    if (madeTop10) {
      // Simple confetti effect with emojis
      const confettiCount = 30;
      const confettiContainer = document.createElement('div');
      confettiContainer.style.position = 'fixed';
      confettiContainer.style.top = '0';
      confettiContainer.style.left = '0';
      confettiContainer.style.width = '100%';
      confettiContainer.style.height = '100%';
      confettiContainer.style.pointerEvents = 'none';
      confettiContainer.style.zIndex = '9999';
      document.body.appendChild(confettiContainer);

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = '🎉';
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.fontSize = '24px';
        confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
        confettiContainer.appendChild(confetti);
      }

      // Add keyframe animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);

      setTimeout(() => {
        document.body.removeChild(confettiContainer);
        document.head.removeChild(style);
      }, 5000);
    }
  }, [madeTop10]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSaveScore(name.trim(), email.trim());
      setIsSubmitted(true);
      setUserRank(potentialRank);
    } catch (error) {
      console.error("Error saving score:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Create display leaderboard with placeholder or user's actual entry
  const displayLeaderboard = () => {
    if (isSubmitted && madeTop10) {
      // User has submitted and made top 10 - show their actual entry highlighted
      const updatedBoard = [...leaderboard];
      const userEntry = { name, score };
      updatedBoard.push(userEntry);
      const sorted = updatedBoard.sort((a, b) => b.score - a.score).slice(0, 10);
      return sorted.map((entry, idx) => ({
        ...entry,
        isUser: entry.name === name && entry.score === score
      }));
    } else if (!isSubmitted && madeTop10) {
      // User hasn't submitted but made top 10 - show placeholder
      const withPlaceholder = [...leaderboard];
      withPlaceholder.push({ name: `--- (Your Score: ${score}) ---`, score });
      const sorted = withPlaceholder.sort((a, b) => b.score - a.score).slice(0, 10);
      return sorted.map((entry, idx) => ({
        ...entry,
        isPlaceholder: entry.name.includes('Your Score')
      }));
    }
    // User didn't make top 10
    return leaderboard.map(entry => ({ ...entry }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 pt-20 md:pt-4">
      {/* Back Link */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm">Back to Home</span>
      </Link>

      {/* Score Display */}
      <div className="text-center space-y-6 max-w-md mb-8">
        <h1 className="text-5xl font-bold text-primary font-serif">Game Over!</h1>
        
        {madeTop10 && !isSubmitted && (
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary animate-fade-in">
            <Trophy className="w-8 h-8" />
            <span>You made the Top 10!</span>
            <Trophy className="w-8 h-8" />
          </div>
        )}
        
        <div className="space-y-2">
          <p className="text-2xl text-muted-foreground">Your Score:</p>
          <p className="text-6xl font-bold text-foreground">{score}</p>
        </div>

        {/* Leaderboard */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">This Hour's Top 10</h2>
          <LeaderboardList leaderboard={displayLeaderboard()} compact />
        </div>
      </div>

      {/* Conditional Primary CTA */}
      <div className="space-y-4 w-full max-w-md">
        {!isSubmitted && !showForm && (
          <Button
            onClick={() => setShowForm(true)}
            size="lg"
            className="w-full h-14 text-lg font-semibold"
          >
            {madeTop10 ? "Claim Your Spot!" : "Save Your Score"}
          </Button>
        )}

        {/* Inline Form */}
        {showForm && !isSubmitted && (
          <form onSubmit={handleSubmit} className="space-y-3 animate-fade-in">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "SUBMIT"}
            </Button>
          </form>
        )}

        {/* Post-Submit Confirmation */}
        {isSubmitted && !madeTop10 && (
          <div className="text-center p-4 bg-secondary rounded-lg animate-fade-in">
            <p className="text-lg font-semibold text-foreground">
              Score Saved! You ranked #{userRank} this hour.
            </p>
          </div>
        )}

        {/* Secondary CTAs */}
        <div className="space-y-3 pt-2">
          <a href="https://testflight.apple.com/join/8rKnsebm" target="_blank" rel="noopener noreferrer" className="block">
            <Button size="lg" variant="outline" className="w-full h-12 text-base font-semibold">
              Download Full App
            </Button>
          </a>
          <Button
            onClick={onPlayAgain}
            size="lg"
            variant="outline"
            className="w-full h-12 text-base font-semibold"
          >
            Play Again
          </Button>
        </div>
      </div>
    </div>
  );
};

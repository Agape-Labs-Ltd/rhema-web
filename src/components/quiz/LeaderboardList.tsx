interface LeaderboardListProps {
  leaderboard: Array<{ 
    name: string; 
    score: number; 
    isPlaceholder?: boolean;
    isUser?: boolean;
  }>;
  compact?: boolean;
}

export const LeaderboardList = ({ leaderboard, compact = false }: LeaderboardListProps) => {
  return (
    <div className={`space-y-2 ${compact ? "max-h-64" : ""} overflow-y-auto`}>
      {leaderboard.map((entry, index) => {
        const isHighlighted = entry.isPlaceholder || entry.isUser;
        return (
          <div
            key={index}
            className={`flex justify-between items-center p-3 rounded-lg transition-colors ${
              isHighlighted 
                ? "bg-[hsl(var(--accent))] border-2 border-primary" 
                : "bg-secondary"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-primary w-6">
                {index + 1}.
              </span>
              <span className={`font-medium ${isHighlighted ? "text-primary font-bold" : "text-foreground"}`}>
                {entry.name}
              </span>
            </div>
            <span className={`font-bold ${isHighlighted ? "text-primary text-xl" : "text-primary"}`}>
              {entry.score}
            </span>
          </div>
        );
      })}
    </div>
  );
};

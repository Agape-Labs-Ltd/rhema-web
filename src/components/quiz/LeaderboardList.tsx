interface LeaderboardListProps {
  leaderboard: Array<{ name: string; score: number }>;
  compact?: boolean;
}

export const LeaderboardList = ({ leaderboard, compact = false }: LeaderboardListProps) => {
  return (
    <div className={`space-y-2 ${compact ? "max-h-64" : ""} overflow-y-auto`}>
      {leaderboard.map((entry, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-3 bg-secondary rounded-lg"
        >
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-primary w-6">
              {index + 1}.
            </span>
            <span className="font-medium text-foreground">{entry.name}</span>
          </div>
          <span className="font-bold text-primary">{entry.score}</span>
        </div>
      ))}
    </div>
  );
};

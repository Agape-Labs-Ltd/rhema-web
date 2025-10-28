import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LeaderboardList } from "./LeaderboardList";

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  leaderboard: Array<{ name: string; score: number }>;
}

export const LeaderboardModal = ({ isOpen, onClose, leaderboard }: LeaderboardModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <span className="text-3xl">🏆</span>
            This Hour's Top 10
          </DialogTitle>
        </DialogHeader>
        <LeaderboardList leaderboard={leaderboard} />
      </DialogContent>
    </Dialog>
  );
};

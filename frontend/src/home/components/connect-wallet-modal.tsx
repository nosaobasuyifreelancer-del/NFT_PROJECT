import { Dialog, DialogContent } from "@/shared/components/ui/dialog";

export default function ConnectWallet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent variant="sm"></DialogContent>
    </Dialog>
  );
}

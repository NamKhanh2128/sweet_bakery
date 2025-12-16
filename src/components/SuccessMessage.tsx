import { Dialog, DialogContent } from "@/components/ui/dialog";

interface SuccessMessageProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string;
}

export function SuccessMessage({ open, onOpenChange, message }: SuccessMessageProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 border-2 border-primary overflow-hidden">
        <div className="bg-bakery-success-bg p-12 text-center">
          <p className="text-lg">{message}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

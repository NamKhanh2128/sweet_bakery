import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  type?: "employee" | "product";
}

export function ConfirmDialog({ open, onOpenChange, onConfirm, type = "employee" }: ConfirmDialogProps) {
  const isProduct = type === "product";
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 border-2 border-primary overflow-hidden">
        <div className="bg-bakery-pink p-8">
          <p className="text-center text-lg mb-6">
            Are you sure you want to remove this {isProduct ? "product" : "employee"}?
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => onOpenChange(false)}
              className="px-6 py-2 bg-card text-foreground rounded-full font-medium hover:bg-muted transition-colors"
            >
              Quit
            </button>
            <button 
              onClick={onConfirm}
              className="px-6 py-2 bg-destructive text-destructive-foreground rounded-full font-medium hover:bg-destructive/90 transition-colors"
            >
              Remove (Delete) {isProduct ? "Product" : "Employee"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

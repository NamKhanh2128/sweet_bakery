import { Dialog, DialogContent } from "@/components/ui/dialog";

interface DailyReportPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  date?: string;
}

export function DailyReportPopup({ open, onOpenChange, date = "12/10/2025" }: DailyReportPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-6 border-2 border-primary">
        <h1 className="text-3xl font-bold text-primary mb-1">Revenue Report</h1>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 bg-primary w-48" />
          <span className="date-badge text-sm">{date}</span>
        </div>
        
        {/* Main Information Table */}
        <div className="border border-primary rounded overflow-hidden mb-4">
          <div className="table-header-red text-center py-1.5 font-medium text-sm">
            Main Information
          </div>
          <table className="w-full bg-card text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-3 py-1.5 text-center font-medium border-b border-r border-border w-1/2">Information</th>
                <th className="px-3 py-1.5 text-center font-medium border-b border-border w-1/2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-3 py-1.5 font-medium border-r border-border">Total revenue</td>
                <td className="px-3 py-1.5">120,000,000 đ</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-3 py-1.5 font-medium border-r border-border">No. of Orders</td>
                <td className="px-3 py-1.5">10000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-3 py-1.5 font-medium border-r border-border">Total No. of sold items</td>
                <td className="px-3 py-1.5">10000</td>
              </tr>
              <tr>
                <td className="px-3 py-1.5 font-medium border-r border-border">Average revenue / Order</td>
                <td className="px-3 py-1.5">120,000 đ</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Top 5 Products Table */}
        <div className="border border-bakery-blue rounded overflow-hidden">
          <div className="table-header-blue text-center py-1.5 font-medium text-sm">
            Top 5 best-selling products
          </div>
          <table className="w-full bg-card text-sm">
            <tbody>
              <tr className="border-b border-border">
                <td className="px-3 py-1.5 font-medium border-r border-border">1. Tiramisu</td>
                <td className="px-3 py-1.5 font-bold">10000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-3 py-1.5 font-medium border-r border-border">2. Mousse Chocolate</td>
                <td className="px-3 py-1.5">9800</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-3 py-1.5 font-medium border-r border-border">3. Cheese cake</td>
                <td className="px-3 py-1.5">560</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-3 py-1.5 font-medium border-r border-border">4. Cake 1</td>
                <td className="px-3 py-1.5">130</td>
              </tr>
              <tr>
                <td className="px-3 py-1.5 font-medium border-r border-border">5. Cake 2</td>
                <td className="px-3 py-1.5">115</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}

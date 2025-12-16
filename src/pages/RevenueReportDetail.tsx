import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RevenueReportDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-card">
      <main className="flex-1 px-8 py-12">
        <button 
          onClick={() => navigate("/revenue-report")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-primary italic">Revenue Report</h1>
          <span className="date-badge text-lg">12/10/2025</span>
        </div>
        <div className="h-1 bg-primary w-full mb-12" />
        
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Main Information Table */}
          <div className="border border-bakery-red rounded overflow-hidden">
            <div className="table-header-red text-center py-2 font-medium">
              Main Information
            </div>
            <table className="w-full bg-card">
              <thead>
                <tr className="bg-muted">
                  <th className="px-6 py-3 text-center font-medium border-b border-border w-1/2">Information</th>
                  <th className="px-6 py-3 text-center font-medium border-b border-border w-1/2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-6 py-3 font-medium">Total revenue</td>
                  <td className="px-6 py-3">120,000,000 đ</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-3 font-medium">No. of Orders</td>
                  <td className="px-6 py-3">10000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-3 font-medium">Total No. of sold items</td>
                  <td className="px-6 py-3">10000</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium">Average revenue / Order</td>
                  <td className="px-6 py-3">120,000 đ</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Top 5 Products Table */}
          <div className="border border-bakery-blue rounded overflow-hidden">
            <div className="table-header-blue text-center py-2 font-medium">
              Top 5  best-selling products
            </div>
            <table className="w-full bg-card">
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-6 py-3 font-medium">1. Tiramisu</td>
                  <td className="px-6 py-3 font-bold">10000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-3 font-medium">2. Mousse Chocolate</td>
                  <td className="px-6 py-3">9800</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-3 font-medium">3. Cheese cake</td>
                  <td className="px-6 py-3">560</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-3 font-medium">4. Cake 1</td>
                  <td className="px-6 py-3">130</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium">5. Cake 2</td>
                  <td className="px-6 py-3">115</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RevenueReportDetail;

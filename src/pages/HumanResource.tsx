import { Plus } from "lucide-react";
import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const employeesData = [
  { id: "PRO001", name: "Cake 1", email: "Birthday Cake", phone: "150.000 đ", status: "10000" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { id: "#OR001", name: "Nguyen Van A", email: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
];

const HumanResource = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-bakery-cream">
      <HeaderBar />
      
      <main className="flex-1 px-8 py-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-5xl font-bold text-primary">HUMAN RESOURCE</h1>
            <h1 className="text-5xl font-bold text-primary">MANAGEMENT</h1>
          </div>
          <button 
            onClick={() => navigate("/add-employee")}
            className="btn-add-new"
          >
            ADD NEW EMPLOYEE <Plus className="w-5 h-5" />
          </button>
        </div>
        
        <div className="h-1 bg-gradient-to-r from-secondary to-secondary/50 w-full mb-4" />
        
        <h3 className="text-xl font-bold text-primary mb-4">List of Employee</h3>
        <div className="h-0.5 bg-gradient-to-r from-secondary to-secondary/50 w-full mb-6" />
        
        <div className="bg-card rounded-lg overflow-hidden border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="px-4 py-3 text-center font-medium text-sm">Full name</th>
                <th className="px-4 py-3 text-center font-medium text-sm">ID</th>
                <th className="px-4 py-3 text-center font-medium text-sm">Email</th>
                <th className="px-4 py-3 text-center font-medium text-sm">Phone number</th>
                <th className="px-4 py-3 text-center font-medium text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((emp, index) => (
                <tr 
                  key={index} 
                  className="border-b border-border hover:bg-muted/50 cursor-pointer"
                  onClick={() => navigate("/employee-detail")}
                >
                  <td className="px-4 py-2 text-sm">{emp.id}</td>
                  <td className="px-4 py-2 text-sm">{emp.name}</td>
                  <td className="px-4 py-2 text-sm">{emp.email}</td>
                  <td className="px-4 py-2 text-sm">{emp.phone}</td>
                  <td className="px-4 py-2 text-sm">{emp.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HumanResource;

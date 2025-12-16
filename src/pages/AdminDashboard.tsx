import { User } from "lucide-react";
import { AdminSidebar } from "@/components/AdminSidebar";
import heroFood from "@/assets/hero-food.png";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar />
      
      <main className="flex-1 bg-bakery-cream">
        <div className="p-12">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-6xl font-bold text-foreground mb-2">
                Welcome back,
              </h1>
              <h1 className="text-6xl font-bold text-foreground mb-6">
                Admin!
              </h1>
              <p className="text-xl text-muted-foreground">
                Mange your Bakery today!
              </p>
            </div>
            
            <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center">
              <User className="w-12 h-12 text-primary" strokeWidth={1} />
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <img 
              src={heroFood} 
              alt="Bakery food" 
              className="w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

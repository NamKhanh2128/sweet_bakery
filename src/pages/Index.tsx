import { Menu } from "lucide-react";
import { useSidebar } from "@/contexts/SidebarContext";
import { Footer } from "@/components/Footer";
import bakeryLogo from "@/assets/bakery-logo.png";
import heroFood from "@/assets/hero-food.png";

const Index = () => {
  const { toggle } = useSidebar();

  return (
    <div className="min-h-screen flex flex-col bg-bakery-cream">
      {/* Header */}
      <header className="bg-card px-6 py-4 flex items-center justify-between">
        <button onClick={toggle} className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-3">
          <img src={bakeryLogo} alt="Sweet Bakery" className="w-12 h-12 object-contain" />
          <span className="text-xl font-bold text-primary">Sweet Bakery</span>
        </div>
        <div className="w-10" />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-primary mb-4">Welcome to Sweet Bakery</h1>
          <p className="text-xl text-muted-foreground mb-8">Management Dashboard</p>
          <img src={heroFood} alt="Bakery products" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

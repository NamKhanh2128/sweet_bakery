import { Menu, User } from "lucide-react";
import bakeryLogo from "@/assets/bakery-logo.png";
import { useSidebar } from "@/contexts/SidebarContext";

interface HeaderBarProps {
  userName?: string;
  userRole?: string;
  userEmail?: string;
}

export function HeaderBar({ userName = "Ngo Minh Ngoc", userRole = "Owner", userEmail = "ngoc.nm235984@sis.hust.edu.vn" }: HeaderBarProps) {
  const { toggle } = useSidebar();

  return (
    <>
      {/* Top Header - White background with hamburger and logo */}
      <header className="bg-card py-2 px-4 border-b border-border">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggle}
            className="p-1 hover:bg-muted rounded transition-colors"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
          <img src={bakeryLogo} alt="Sweet Bakery" className="w-12 h-12 object-contain" />
        </div>
      </header>
      
      {/* User Profile Card - Below header on cream background */}
      <div className="bg-bakery-cream px-6 py-4">
        <div className="inline-flex items-center gap-3 bg-bakery-user-card rounded-xl px-4 py-3 border border-border/20">
          <div className="w-10 h-10 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
            <User className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <p className="font-medium text-sm text-foreground">{userName} - {userRole}</p>
            <p className="text-xs text-muted-foreground">Mail: {userEmail}</p>
          </div>
        </div>
      </div>
    </>
  );
}

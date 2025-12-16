import { FileText, Users, Cake, LogOut, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import bakeryLogo from "@/assets/bakery-logo.png";
import { useSidebar } from "@/contexts/SidebarContext";
import { useLocation } from "react-router-dom";

const menuItems = [
  { title: "Revenue Report", url: "/revenue-report", icon: FileText },
  { title: "Human Resource Management", url: "/human-resource", icon: Users },
  { title: "Add Product", url: "/add-product", icon: Cake },
];

export function ToggleableSidebar() {
  const { isOpen, close } = useSidebar();
  const location = useLocation();
  const isWelcomePage = location.pathname === "/";

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={close}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 flex flex-col z-50 transition-transform duration-300 ${
          isWelcomePage ? "bg-bakery-yellow" : "bg-[hsl(0_100%_40%)]"
        } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex items-center justify-between">
          <div className="bg-card rounded-lg p-3 inline-block">
            <img src={bakeryLogo} alt="Sweet Bakery" className="w-16 h-16 object-contain" />
          </div>
          <button 
            onClick={close}
            className="p-2 hover:bg-sidebar-accent/50 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-sidebar-foreground" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              onClick={close}
              className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-lg transition-colors"
              activeClassName="bg-sidebar-accent/50"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.title}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <button className="flex items-center gap-2 px-6 py-2 bg-card text-foreground rounded-full font-medium hover:bg-muted transition-colors">
            <LogOut className="w-4 h-4" />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
}

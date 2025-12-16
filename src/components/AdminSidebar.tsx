import { FileText, Users, Plus, Cake, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import bakeryLogo from "@/assets/bakery-logo.png";

const menuItems = [
  { title: "Revenue Report", url: "/revenue-report", icon: FileText },
  { title: "Human Resouce Management", url: "/human-resource", icon: Users },
  { title: "Add Product", url: "/add-product", icon: Cake },
  { title: "Products Details", url: "/products-details", icon: Cake },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen sidebar-gradient flex flex-col">
      <div className="p-6">
        <div className="bg-card rounded-lg p-4 inline-block">
          <img src={bakeryLogo} alt="Sweet Bakery" className="w-20 h-20 object-contain" />
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
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
  );
}

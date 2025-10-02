import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  Calendar,
  CheckSquare,
  Search,
  Users,
  Bus,
  ShoppingBag,
  Briefcase,
  Link as LinkIcon,
  MessageSquare,
  MessageCircle,
  User,
  Bell,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Study Materials", href: "/materials", icon: BookOpen },
  { name: "Timetable", href: "/timetable", icon: Calendar },
  { name: "Attendance", href: "/attendance", icon: CheckSquare },
  { name: "Lost & Found", href: "/lost-found", icon: Search },
  { name: "Clubs & Societies", href: "/clubs", icon: Users },
  { name: "Transport Info", href: "/transport", icon: Bus },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
  { name: "Placements", href: "/placements", icon: Briefcase },
  { name: "Important Links", href: "/links", icon: LinkIcon },
  { name: "Feedback", href: "/feedback", icon: MessageSquare },
  { name: "Peer Help Forum", href: "/forum", icon: MessageCircle },
];

export function Sidebar() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
        <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-primary">
          S
        </div>
        <div>
          <h2 className="text-lg font-bold text-sidebar-foreground">SRM Companion</h2>
          <p className="text-xs text-sidebar-foreground/70">Student Portal</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-md"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-4 border-t border-sidebar-border">
        <Link
          to="/profile"
          onClick={() => setIsMobileOpen(false)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-all duration-200"
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-primary-foreground shadow-lg"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-sidebar flex flex-col z-40 transition-transform duration-300 shadow-xl",
          "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}

import { Link, useLocation } from "react-router-dom";
import { Settings, User, Scan, Clock, Info, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/scan", label: "Scan", icon: Scan },
  { to: "/history", label: "History", icon: Clock },
  { to: "/about", label: "About", icon: Info },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Leaf className="h-4 w-4 text-primary" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">Nutrisi AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:text-foreground"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-accent rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-1.5 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  <link.icon className="h-3.5 w-3.5" />
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <Settings className="h-4 w-4" />
          </button>
          <div className="h-8 w-8 rounded-full bg-accent border border-border flex items-center justify-center">
            <User className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

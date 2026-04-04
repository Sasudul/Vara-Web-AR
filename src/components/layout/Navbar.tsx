import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // We assume the home page hero image is dark/mixed, while product pages are solid light.
  const isHomePage = location.pathname === "/" || location.pathname.endsWith("/index.html") || !location.pathname.includes("product") && !location.pathname.includes("checkout");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Living", path: "/category/living" },
    { name: "Dining", path: "/category/dining" },
    { name: "Bedroom", path: "/category/bedroom" },
    { name: "The AR Experience", path: "/ar-experience" },
    { name: "About Vara", path: "/about" },
  ];

  const headerStyle = isScrolled 
    ? "bg-vara-cream/90 backdrop-blur-md py-4 shadow-sm text-vara-charcoal" 
    : "bg-transparent py-6 " + (isHomePage ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" : "text-vara-charcoal");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          headerStyle
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-widest uppercase z-50">
            Vara
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium tracking-wide hover:text-vara-terracotta transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6 z-50">
            <Link to="/checkout" className="hover:text-vara-terracotta transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <button
              className="md:hidden hover:text-vara-terracotta transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-vara-cream pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col space-y-6 text-center mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-serif hover:text-vara-terracotta transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

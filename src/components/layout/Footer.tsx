import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-vara-charcoal text-vara-cream py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold tracking-widest uppercase mb-6 block">
            Vara
          </Link>
          <p className="text-vara-cream/70 text-sm leading-relaxed max-w-xs">
            The future of home. Experience high-end, architectural, and serene furniture through WebAR.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-lg mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-vara-cream/70">
            <li><Link to="/category/living" className="hover:text-vara-cream transition-colors">Living Room</Link></li>
            <li><Link to="/category/dining" className="hover:text-vara-cream transition-colors">Dining Room</Link></li>
            <li><Link to="/category/bedroom" className="hover:text-vara-cream transition-colors">Bedroom</Link></li>
            <li><Link to="/collections/new" className="hover:text-vara-cream transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Experience</h4>
          <ul className="space-y-4 text-sm text-vara-cream/70">
            <li><Link to="/ar-experience" className="hover:text-vara-cream transition-colors">The AR Lens</Link></li>
            <li><Link to="/about" className="hover:text-vara-cream transition-colors">Our Story</Link></li>
            <li><Link to="/sustainability" className="hover:text-vara-cream transition-colors">Sustainability</Link></li>
            <li><Link to="/journal" className="hover:text-vara-cream transition-colors">Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-vara-cream/70">
            <li><Link to="/contact" className="hover:text-vara-cream transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-vara-cream transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-vara-cream transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-vara-cream transition-colors">Care Instructions</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-vara-cream/10 flex flex-col md:flex-row justify-between items-center text-xs text-vara-cream/50">
        <p>&copy; {new Date().getFullYear()} Vara Home. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-vara-cream transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-vara-cream transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

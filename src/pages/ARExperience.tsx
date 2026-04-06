import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function ARExperience() {
  return (
    <div className="min-h-screen bg-vara-charcoal text-vara-cream pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif mb-8"
        >
          Spatial Commerce by Vara
        </motion.h1>

        <p className="text-xl font-light text-vara-cream/80 max-w-2xl mx-auto mb-16">
          You no longer need to measure your floors or guess if a wood tone matches your walls. Our WebAR technology brings the showroom to your living room.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left">
          <div className="bg-vara-cream/5 p-8 rounded-sm">
            <h3 className="text-xl font-serif mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-vara-terracotta text-white flex items-center justify-center text-sm">1</span>
              Browse
            </h3>
            <p className="text-vara-cream/60">Navigate to any product page and customize your preferred material finish, from Velvet to solid Oak.</p>
          </div>
          <div className="bg-vara-cream/5 p-8 rounded-sm">
            <h3 className="text-xl font-serif mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-vara-terracotta text-white flex items-center justify-center text-sm">2</span>
              Tap to Place
            </h3>
            <p className="text-vara-cream/60">Using a smartphone, simply tap "Place in Room". There are no apps to download. The browser handles everything.</p>
          </div>
          <div className="bg-vara-cream/5 p-8 rounded-sm">
            <h3 className="text-xl font-serif mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-vara-terracotta text-white flex items-center justify-center text-sm">3</span>
              Analyze
            </h3>
            <p className="text-vara-cream/60">Our spatial engine relies on Apple ARKit and Google ARCore to project the mesh at an exact 1:1 scale for flawless confidence.</p>
          </div>
        </div>

        <Link to="/category/all">
          <Button size="lg" className="bg-vara-cream text-vara-charcoal hover:bg-vara-cream/90">
            Start Your AR Journey
          </Button>
        </Link>
      </div>
    </div>
  );
}

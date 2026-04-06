import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function About() {
  return (
    <div className="min-h-screen bg-vara-cream pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif mb-12 text-center"
        >
          The Story of Vara
        </motion.h1>

        <div className="aspect-[21/9] bg-white overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
            alt="Vara Studio" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif mb-6 leading-relaxed">
              "We believe that furniture format should mirror the architectural precision of the spaces they inhabit."
            </h2>
            <p className="text-vara-charcoal/70 mb-6 leading-loose">
              Founded in 2024, Vara was born out of a desire to bridge the gap between high-end architectural design and accessible modern living. We reject the notion of fast furniture. Instead, we obsess over honest materials—solid oak, European linens, and high-density bouclÃ©—crafted into silhouettes that will outlast passing trends.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-vara-charcoal/70 mb-6 leading-loose">
              Every Vara piece is engineered with a strict 1:1 emphasis on scale and proportion. But we knew that looking at a picture on a screen wasn't enough to convey our structural integrity. 
            </p>
            <p className="text-vara-charcoal/70 mb-10 leading-loose">
              That's why we became pioneers in spatial commerce. By integrating native WebAR engines directly into our storefront, we allow you to instantly project our luxury furniture into your living room with millimeter precision. Test out the velvet texture in your actual lighting conditions before you ever add it to your cart.
            </p>
            <Link to="/category/all">
              <Button>Explore The Collection</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

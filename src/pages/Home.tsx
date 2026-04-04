import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Box } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Fallback / Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern Living Space" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center text-vara-cream px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6"
          >
            The Future of Home
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto"
          >
            Experience high-end, architectural furniture in your space before it arrives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link to="/product/vara-lounge-chair">
              <Button size="lg" className="bg-vara-cream text-vara-charcoal hover:bg-vara-cream/90">
                Experience Vara in Your Home
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 md:px-12 bg-vara-cream">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif mb-4">Curated Collection</h2>
              <p className="text-vara-charcoal/70 max-w-md">
                Discover pieces designed with architectural precision and sustainable materials.
              </p>
            </div>
            <Link to="/category/all" className="hidden md:inline-flex items-center text-sm font-medium hover:text-vara-terracotta transition-colors mt-6 md:mt-0">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Link to="/product/vara-lounge-chair">
                <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop" 
                    alt="Vara Lounge Chair" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-vara-cream text-vara-charcoal px-6 py-3 text-sm font-medium flex items-center gap-2">
                        <Box className="w-4 h-4" /> View in AR
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl mb-1">The Vara Lounge</h3>
                    <p className="text-sm text-vara-charcoal/60">Linen & Walnut</p>
                  </div>
                  <span className="font-medium">$1,250</span>
                </div>
              </Link>
            </motion.div>

            {/* Product Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Link to="/product/vara-dining-table">
                <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000&auto=format&fit=crop" 
                    alt="Vara Dining Table" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-vara-cream text-vara-charcoal px-6 py-3 text-sm font-medium flex items-center gap-2">
                        <Box className="w-4 h-4" /> View in AR
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl mb-1">Architect Dining Table</h3>
                    <p className="text-sm text-vara-charcoal/60">Solid Oak</p>
                  </div>
                  <span className="font-medium">$2,800</span>
                </div>
              </Link>
            </motion.div>

            {/* Product Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Link to="/product/vara-sofa">
                <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop" 
                    alt="Vara Sofa" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-vara-cream text-vara-charcoal px-6 py-3 text-sm font-medium flex items-center gap-2">
                        <Box className="w-4 h-4" /> View in AR
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl mb-1">Cloud Modular Sofa</h3>
                    <p className="text-sm text-vara-charcoal/60">BouclÃ©</p>
                  </div>
                  <span className="font-medium">$3,400</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AR Feature Section */}
      <section className="py-24 px-6 md:px-12 bg-vara-charcoal text-vara-cream">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Vara Lens</h2>
            <p className="text-lg text-vara-cream/80 mb-8 font-light leading-relaxed">
              Don't just imagine it. See it. Our WebAR technology allows you to place true-to-scale 3D models of our furniture directly in your space, no app required.
            </p>
            <ul className="space-y-6 mb-10">
              <li className="flex items-start">
                <div className="bg-vara-terracotta/20 p-2 rounded-full mr-4 mt-1">
                  <Box className="w-5 h-5 text-vara-terracotta" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">True 1:1 Scale</h4>
                  <p className="text-vara-cream/60 text-sm">Know exactly how it fits before you buy.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-vara-terracotta/20 p-2 rounded-full mr-4 mt-1">
                  <Box className="w-5 h-5 text-vara-terracotta" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Material Configurator</h4>
                  <p className="text-vara-cream/60 text-sm">Swap textures and colors in real-time.</p>
                </div>
              </li>
            </ul>
            <Link to="/ar-experience">
              <Button variant="outline" size="lg" className="border-vara-cream text-vara-cream hover:bg-vara-cream hover:text-vara-charcoal">
                Try The Experience
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-vara-cream/5 rounded-full absolute -inset-4 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop" 
              alt="AR Experience" 
              className="relative z-10 w-full h-auto object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

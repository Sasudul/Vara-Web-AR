import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { Box, Ruler, Leaf, ShieldCheck } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import "@google/model-viewer";

export function Product() {
  const { id } = useParams();
  const [activeMaterial, setActiveMaterial] = useState("Linen");
  const [showDimensions, setShowDimensions] = useState(false);

  // Mock product data
  const product = {
    id: "vara-lounge-chair",
    name: "The Vara Lounge",
    price: "$1,250",
    description: "Architectural precision meets serene comfort. The Vara Lounge is designed to anchor your living space with its bold, geometric lines and soft, inviting textures.",
    materials: ["Linen", "Velvet", "BouclÃ©"],
    specs: {
      dimensions: "W 32\" Ã— H 30\" Ã— D 34\"",
      weight: "45 lbs",
      materials: "FSC-Certified Walnut, High-Resiliency Foam, Premium Linen",
      care: "Professional cleaning recommended. Vacuum regularly with a soft brush attachment."
    },
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop"
    ],
    modelSrc: "https://modelviewer.dev/assets/ShopifyModels/Chair.glb", // Placeholder GLB
    iosSrc: "https://modelviewer.dev/shared-assets/models/Chair.usdz" // Placeholder USDZ
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-vara-cream pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Photography Gallery */}
          <div className="lg:w-1/2 space-y-8">
            {product.images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="aspect-[4/5] bg-white overflow-hidden"
              >
                <img 
                  src={img} 
                  alt={`${product.name} view ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Product Info & 3D Viewer (Sticky) */}
          <div className="lg:w-1/2">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif mb-4">{product.name}</h1>
                <p className="text-2xl font-light mb-6">{product.price}</p>
                <p className="text-vara-charcoal/80 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Material Selection */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Material: {activeMaterial}</h3>
                  <div className="flex gap-4">
                    {product.materials.map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setActiveMaterial(mat)}
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          activeMaterial === mat ? "border-vara-charcoal scale-110" : "border-transparent hover:scale-105"
                        }`}
                        style={{
                          backgroundColor: mat === "Linen" ? "#E8E3D9" : mat === "Velvet" ? "#2C2C2B" : "#D4CFC4"
                        }}
                        aria-label={`Select ${mat}`}
                      />
                    ))}
                  </div>
                </div>

                {/* 3D Viewer Container */}
                <div className="relative aspect-square bg-[#EAE8E3] mb-8 overflow-hidden group">
                  {/* @ts-ignore */}
                  <model-viewer
                    src={product.modelSrc}
                    ios-src={product.iosSrc}
                    alt={product.name}
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    ar-scale="fixed"
                    camera-controls
                    auto-rotate
                    shadow-intensity="1"
                    style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
                  >
                    <div slot="poster" className="absolute inset-0 flex items-center justify-center bg-[#EAE8E3]">
                       <div className="w-8 h-8 border-4 border-vara-charcoal border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    
                    {/* Custom AR Button */}
                    <button 
                      slot="ar-button" 
                      className="absolute bottom-6 right-6 bg-vara-charcoal text-vara-cream px-6 py-3 text-sm font-medium flex items-center gap-2 shadow-lg hover:bg-vara-charcoal/90 transition-colors z-10"
                    >
                      <Box className="w-4 h-4" /> Place in Room
                    </button>
                  {/* @ts-ignore */}
                  </model-viewer>

                  {/* HUD Overlay Toggle */}
                  <button 
                    onClick={() => setShowDimensions(!showDimensions)}
                    className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1.5 text-xs font-medium flex items-center gap-2 rounded-sm z-10 hover:bg-white transition-colors"
                  >
                    <Ruler className="w-3 h-3" /> {showDimensions ? "Hide Specs" : "Show Specs"}
                  </button>

                  {/* Dimensions HUD */}
                  {showDimensions && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-14 left-4 bg-vara-charcoal/90 backdrop-blur text-vara-cream p-4 text-xs space-y-2 rounded-sm z-10"
                    >
                      <p><span className="text-vara-cream/60">Dimensions:</span> {product.specs.dimensions}</p>
                      <p><span className="text-vara-cream/60">Weight:</span> {product.specs.weight}</p>
                    </motion.div>
                  )}
                </div>

                {/* Add to Cart */}
                <Button size="lg" className="w-full mb-12">
                  Add to Cart â {product.price}
                </Button>

                {/* Contextual Data */}
                <div className="space-y-6 border-t border-vara-charcoal/10 pt-8">
                  <div className="flex items-start gap-4">
                    <Leaf className="w-5 h-5 text-vara-sage mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">Sustainable Sourcing</h4>
                      <p className="text-sm text-vara-charcoal/70">{product.specs.materials}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-5 h-5 text-vara-sage mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">Care Instructions</h4>
                      <p className="text-sm text-vara-charcoal/70">{product.specs.care}</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

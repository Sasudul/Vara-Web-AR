import { Button } from "@/src/components/ui/Button";
import "@google/model-viewer";
import { Box, Leaf, Ruler, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Centralized Product Database for Dynamic Routing
const productsData: Record<string, any> = {
  "vara-lounge-chair": {
    id: "vara-lounge-chair",
    name: "The Vara Lounge",
    price: "Rs. 375,000",
    description: "Architectural precision meets serene comfort. The Vara Lounge is designed to anchor your living space with its bold, geometric lines and soft, inviting textures.",
    materials: ["Linen", "Velvet", "BouclÃ©"],
    specs: {
      dimensions: 'W 32" Ã— H 30" Ã— D 34"',
      weight: "45 lbs",
      materials: "FSC-Certified Walnut, High-Resiliency Foam, Premium Linen",
      care: "Professional cleaning recommended. Vacuum regularly with a soft brush attachment."
    },
    images: [
      "https://image.invaluable.com/housePhotos/kamelot/17/787217/H1089-L396971863.jpg?q=80&w=100&auto=format&fit=crop",
      "https://i.pinimg.com/736x/14/cd/9c/14cd9c45c405fe9ae6ebd568c2c3979c.jpg?q=80&w=1000&auto=format&fit=crop"
    ],
    modelSrc: "https://modelviewer.dev/assets/ShopifyModels/Chair.glb",
    iosSrc: "https://modelviewer.dev/assets/ShopifyModels/Chair.usdz",
    hotspots: { h: '30"', w: '32"', d: '34"' }
  },
  "vara-dining-table": {
    id: "vara-dining-table",
    name: "Architect Dining Table",
    price: "Rs. 840,000",
    description: "A masterclass in minimalism. The Architect Dining Table features solid oak craftsmanship with absolute geometric precision, anchoring your dining room with natural warmth.",
    materials: ["Oak", "Walnut", "Ash"],
    specs: {
      dimensions: 'W 84" Ã— H 30" Ã— D 42"',
      weight: "180 lbs",
      materials: "Solid White Oak, Natural Matte Finish",
      care: "Wipe clean with a damp cloth. Avoid harsh chemical cleaners."
    },
    images: [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000&auto=format&fit=crop"
    ],
    // Using GeoPlanter as a proxy for an architectural block table in the demo
    modelSrc: "https://modelviewer.dev/assets/ShopifyModels/GeoPlanter.glb",
    iosSrc: "https://modelviewer.dev/assets/ShopifyModels/GeoPlanter.usdz",
    hotspots: { h: '30"', w: '84"', d: '42"' }
  },
  "vara-sofa": {
    id: "vara-sofa",
    name: "Cloud Modular Sofa",
    price: "Rs. 1,020,000",
    description: "Unstructured elegance. The Cloud Modular Sofa offers deep seating and supreme BouclÃ© softness, effortlessly adapting to any modern layout.",
    materials: ["BouclÃ©", "Linen", "Cotton"],
    specs: {
      dimensions: 'W 112" Ã— H 32" Ã— D 40"',
      weight: "220 lbs",
      materials: "Engineered Hardwood, Down-Blend Cushions, BouclÃ© Fabric",
      care: "Flip and fluff cushions regularly. Spot clean with dry cleaning solvent."
    },
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop"
    ],
    // Using Khronos SheenChair as a plush sofa-like module proxy
    modelSrc: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb",
    iosSrc: "",
    hotspots: { h: '32"', w: '112"', d: '40"' }
  }
};

export function Product() {
  const { id } = useParams<{ id: string }>();
  // Use product if exists, else fallback to lounging chair or 404
  const product = productsData[id || "vara-lounge-chair"];
  const viewerRef = useRef<any>(null);

  const { addToCart } = useCart();
  const [activeMaterial, setActiveMaterial] = useState(product?.materials[0] || "Linen");
  const [showDimensions, setShowDimensions] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset material when changing products
    if (product) setActiveMaterial(product.materials[0]);
  }, [id, product]);

  // WebAR Material Swapping Logic
  const applyMaterialProperties = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer || !viewer.model || !viewer.model.materials) return;

    // Use material 0 generally, though complex models might use multiple
    const material = viewer.model.materials[0];
    if (!material) return;

    const pbr = material.pbrMetallicRoughness;

    // Generic Color Swapping based on the clicked material name
    const format = activeMaterial.toLowerCase();
    
    if (format.includes("linen") || format.includes("cotton") || format.includes("ash")) {
      pbr.setBaseColorFactor([0.85, 0.82, 0.78, 1]); // Warm beige
      pbr.setRoughnessFactor(0.9);
      pbr.setMetallicFactor(0.0);
    } else if (format.includes("velvet") || format.includes("walnut")) {
      pbr.setBaseColorFactor([0.15, 0.15, 0.16, 1]); // Deep Charcoal/Brown
      pbr.setRoughnessFactor(0.4); 
      pbr.setMetallicFactor(0.1);
    } else if (format.includes("bouclÃ©") || format.includes("oak")) {
      pbr.setBaseColorFactor([0.92, 0.90, 0.87, 1]); // Bright Off-white/Bleached Wood
      pbr.setRoughnessFactor(1.0); 
      pbr.setMetallicFactor(0.0);
    }
  }, [activeMaterial]);

  // Re-apply materials when the selection changes
  useEffect(() => {
    applyMaterialProperties();
  }, [activeMaterial, applyMaterialProperties]);

  if (!product) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-vara-cream pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Photography Gallery */}
          <div className="lg:w-1/2 space-y-8">
            {product.images.map((img: string, idx: number) => (
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
                    {product.materials.map((mat: string) => {
                      // Determine subtle UI button color based on standard fabric mapping
                      const m = mat.toLowerCase();
                      const bgColor = (m.includes("linen") || m.includes("cotton") || m.includes("ash")) ? "#E8E3D9"
                        : (m.includes("velvet") || m.includes("walnut")) ? "#2C2C2B"
                        : "#d4c9c4ff";

                      return (
                        <button
                          key={mat}
                          onClick={() => setActiveMaterial(mat)}
                          className={`w-12 h-12 rounded-full border-2 transition-all ${
                            activeMaterial === mat ? "border-vara-charcoal scale-110" : "border-transparent hover:scale-105"
                          }`}
                          style={{ backgroundColor: bgColor }}
                          aria-label={`Select ${mat}`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* 3D Viewer Container */}
                <div className="relative aspect-square bg-[#EAE8E3] mb-8 overflow-hidden group">
                  {/* @ts-ignore */}
                  <model-viewer
                    ref={viewerRef}
                    onLoad={applyMaterialProperties}
                    src={product.modelSrc}
                    ios-src={product.iosSrc || undefined}
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
                    
                    {/* Interactive 3D Hotspots for Dimensions */}
                    {showDimensions && (
                      <>
                        <div slot="hotspot-height" data-position="0 0.8 0" data-normal="0 1 0" className="bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold rounded shadow-sm text-vara-charcoal border border-black/10 origin-bottom-left">
                          H: {product.hotspots.h}
                        </div>
                        <div slot="hotspot-width" data-position="-0.3 0.4 0" data-normal="-1 0 0" className="bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold rounded shadow-sm text-vara-charcoal border border-black/10 origin-bottom-left">
                          W: {product.hotspots.w}
                        </div>
                        <div slot="hotspot-depth" data-position="0 0.1 0.4" data-normal="0 0 1" className="bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold rounded shadow-sm text-vara-charcoal border border-black/10 origin-bottom-left">
                          D: {product.hotspots.d}
                        </div>
                      </>
                    )}
                    
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
                </div>

                {/* Add to Cart */}
                <Button 
                  size="lg" 
                  className="w-full mb-12"
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: parseInt(product.price.replace(/[^0-9]/g, "")),
                      quantity: 1,
                      material: activeMaterial,
                      image: product.images[0] // Add the first image for cart visual
                    });
                    // Simple UX feedback
                    alert(`Added ${product.name} (${activeMaterial}) to cart!`);
                  }}
                >
                  Add to Cart {product.price}
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

import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { Search, Filter, Box } from "lucide-react";

// Centralized mock data expanded for realistic filtering
const ALL_PRODUCTS = [
  {
    id: "vara-lounge-chair",
    name: "The Vara Lounge",
    category: "living",
    price: 375000,
    materials: ["Linen", "Velvet", "BouclÃ©"],
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "vara-dining-table",
    name: "Architect Dining Table",
    category: "dining",
    price: 840000,
    materials: ["Oak", "Walnut", "Ash"],
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "vara-sofa",
    name: "Cloud Modular Sofa",
    category: "living",
    price: 1020000,
    materials: ["BouclÃ©", "Linen", "Cotton"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "monolith-bed",
    name: "Monolith Platform Bed",
    category: "bedroom",
    price: 950000,
    materials: ["Walnut", "Oak"],
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "serene-nightstand",
    name: "Serene Nightstand",
    category: "bedroom",
    price: 155000,
    materials: ["Oak", "Ash"],
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "sculpture-dining-chair",
    name: "Sculpture Dining Chair",
    category: "dining",
    price: 180000,
    materials: ["Leather", "Walnut"],
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000&auto=format&fit=crop"
  }
];

export function Category() {
  const { id } = useParams<{ id: string }>();
  const categoryId = id || "all";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("All");
  const [priceSort, setPriceSort] = useState<string>("default");

  useEffect(() => {
    window.scrollTo(0,0);
  }, [id]);

  const allMaterials = useMemo(() => {
    const mats = new Set<string>();
    ALL_PRODUCTS.forEach(p => p.materials.forEach(m => mats.add(m)));
    return ["All", ...Array.from(mats)];
  }, []);

  const filteredProducts = useMemo(() => {
    let result = ALL_PRODUCTS;

    // 1. Category Filter
    if (categoryId !== "all") {
      result = result.filter(p => p.category === categoryId);
    }

    // 2. Search Query Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q));
    }

    // 3. Material Filter
    if (selectedMaterial !== "All") {
      result = result.filter(p => p.materials.includes(selectedMaterial));
    }

    // 4. Sorting
    if (priceSort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (priceSort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryId, searchQuery, selectedMaterial, priceSort]);

  return (
    <div className="min-h-screen bg-vara-cream pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 capitalize">{categoryId === 'all' ? 'Entire Collection' : `${categoryId} Furniture`}</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Filters */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 space-y-8">
              {/* Search */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search collection..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border-b border-vara-charcoal/20 py-3 pl-8 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors"
                />
                <Search className="w-4 h-4 absolute left-0 top-4 text-vara-charcoal/40" />
              </div>

              {/* Filters */}
              <div>
                <h3 className="flex items-center text-sm font-medium uppercase tracking-wider mb-4 border-b border-vara-charcoal/10 pb-2">
                  <Filter className="w-4 h-4 mr-2" /> Filters
                </h3>
                
                <div className="space-y-6">
                  {/* Material Filter */}
                  <div>
                    <label className="text-xs font-semibold uppercase text-vara-charcoal/60 mb-3 block">Material</label>
                    <select 
                      value={selectedMaterial}
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="w-full bg-white border border-vara-charcoal/10 p-2 text-sm focus:outline-none"
                    >
                      {allMaterials.map(mat => (
                        <option key={mat} value={mat}>{mat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Sort */}
                  <div>
                    <label className="text-xs font-semibold uppercase text-vara-charcoal/60 mb-3 block">Sort by Price</label>
                    <select 
                      value={priceSort}
                      onChange={(e) => setPriceSort(e.target.value)}
                      className="w-full bg-white border border-vara-charcoal/10 p-2 text-sm focus:outline-none"
                    >
                      <option value="default">Featured</option>
                      <option value="low">Price: Low to High</option>
                      <option value="high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 text-sm text-vara-charcoal/60">
              Showing {filteredProducts.length} results
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center border border-dashed border-vara-charcoal/20">
                <p className="text-lg font-serif">No products match your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedMaterial("All"); setPriceSort("default"); }}
                  className="mt-4 text-vara-terracotta underline text-sm hover:text-vara-charcoal transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[4/5] overflow-hidden bg-white mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <span className="bg-vara-cream text-vara-charcoal px-6 py-3 text-sm font-medium flex items-center gap-2 shadow-lg">
                              <Box className="w-4 h-4" /> Discover
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="px-1">
                        <h3 className="font-serif text-lg mb-1">{product.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-xs text-vara-charcoal/60 uppercase tracking-wider">{product.materials[0]}</p>
                          <span className="font-medium text-sm">Rs. {product.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

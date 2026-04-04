import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Shield, Truck, CreditCard } from "lucide-react";

export function Checkout() {
  const [step, setStep] = useState(1);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-vara-cream pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-serif mb-12 text-center">Secure Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-10 shadow-sm">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-10 border-b border-vara-charcoal/10 pb-6">
                <div className={`flex items-center gap-2 ${step >= 1 ? 'text-vara-charcoal' : 'text-vara-charcoal/40'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step >= 1 ? 'bg-vara-charcoal text-white' : 'bg-vara-charcoal/10'}`}>1</div>
                  <span className="text-sm font-medium">Shipping</span>
                </div>
                <div className="h-px bg-vara-charcoal/10 flex-1 mx-4"></div>
                <div className={`flex items-center gap-2 ${step >= 2 ? 'text-vara-charcoal' : 'text-vara-charcoal/40'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step >= 2 ? 'bg-vara-charcoal text-white' : 'bg-vara-charcoal/10'}`}>2</div>
                  <span className="text-sm font-medium">Payment</span>
                </div>
              </div>

              {step === 1 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-xl font-serif mb-6">Shipping Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">First Name</label>
                      <input type="text" className="w-full border-b border-vara-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">Last Name</label>
                      <input type="text" className="w-full border-b border-vara-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">Email Address</label>
                      <input type="email" className="w-full border-b border-vara-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">Address</label>
                      <input type="text" className="w-full border-b border-vara-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">City</label>
                      <input type="text" className="w-full border-b border-vara-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">Postal Code</label>
                      <input type="text" className="w-full border-b border-vara-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" />
                    </div>
                  </div>

                  <h2 className="text-xl font-serif mb-6 mt-10">Delivery Method</h2>
                  <div className="space-y-4 mb-10">
                    <label className="flex items-start p-4 border border-vara-charcoal cursor-pointer">
                      <input type="radio" name="delivery" className="mt-1 mr-4 accent-vara-charcoal" defaultChecked />
                      <div>
                        <div className="flex justify-between w-full">
                          <span className="font-medium">White-Glove Delivery</span>
                          <span>Rs. 45,000</span>
                        </div>
                        <p className="text-sm text-vara-charcoal/60 mt-1">Room of choice, assembly, and packaging removal.</p>
                      </div>
                    </label>
                    <label className="flex items-start p-4 border border-vara-charcoal/20 cursor-pointer hover:border-vara-charcoal/50 transition-colors">
                      <input type="radio" name="delivery" className="mt-1 mr-4 accent-vara-charcoal" />
                      <div>
                        <div className="flex justify-between w-full">
                          <span className="font-medium">Standard Threshold</span>
                          <span>Free</span>
                        </div>
                        <p className="text-sm text-vara-charcoal/60 mt-1">Delivery to the first dry area of your residence.</p>
                      </div>
                    </label>
                  </div>

                  <Button className="w-full" onClick={() => setStep(2)}>
                    Continue to Payment
                  </Button>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-xl font-serif mb-6">Payment Method</h2>
                  <div className="space-y-6 mb-10">
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">Card Number</label>
                      <div className="relative">
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full border-b border-vara-charcoal/20 py-2 pl-8 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" />
                        <CreditCard className="w-4 h-4 absolute left-0 top-3 text-vara-charcoal/40" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full border-b border-vara-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">CVC</label>
                        <input type="text" placeholder="123" className="w-full border-b border-vara-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" className="w-1/3" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button className="w-2/3">
                      Place Order
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 shadow-sm sticky top-32">
              <h2 className="text-xl font-serif mb-6">Order Summary</h2>
              
              <div className="flex gap-4 mb-6 pb-6 border-b border-vara-charcoal/10">
                <div className="w-20 h-24 bg-vara-cream overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&auto=format&fit=crop" 
                    alt="The Vara Lounge" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm mb-1">The Vara Lounge</h3>
                  <p className="text-xs text-vara-charcoal/60 mb-2">Linen & Walnut</p>
                  <p className="text-sm font-medium">Rs. 375,000</p>
                </div>
              </div>

              <div className="space-y-3 text-sm mb-6 pb-6 border-b border-vara-charcoal/10">
                <div className="flex justify-between">
                  <span className="text-vara-charcoal/70">Subtotal</span>
                  <span>Rs. 375,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-vara-charcoal/70">Shipping (White-Glove)</span>
                  <span>Rs. 45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-vara-charcoal/70">Taxes</span>
                  <span>Calculated at next step</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="font-serif text-lg">Total</span>
                <span className="font-medium text-xl">Rs. 420,000</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-vara-charcoal/70">
                  <Shield className="w-4 h-4 text-vara-sage" />
                  <span>Secure, encrypted checkout</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-vara-charcoal/70">
                  <Truck className="w-4 h-4 text-vara-sage" />
                  <span>White-glove delivery available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

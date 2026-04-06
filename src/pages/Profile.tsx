import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/Button";

export function Profile() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("details");

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-vara-cream pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl font-serif mb-12">My Account</h1>

        <div className="flex flex-col md:flex-row gap-12 border-t border-vara-charcoal/10 pt-10">
          
          {/* Sidebar */}
          <div className="md:w-1/4">
            <nav className="space-y-4">
              <button 
                onClick={() => setActiveTab("details")}
                className={`w-full text-left py-2 border-b transition-colors ${activeTab === 'details' ? 'border-vara-charcoal font-medium' : 'border-transparent text-vara-charcoal/60 hover:text-vara-charcoal'}`}
              >
                Profile Details
              </button>
              <button 
                onClick={() => setActiveTab("orders")}
                className={`w-full text-left py-2 border-b transition-colors ${activeTab === 'orders' ? 'border-vara-charcoal font-medium' : 'border-transparent text-vara-charcoal/60 hover:text-vara-charcoal'}`}
              >
                Order History
              </button>
              <button 
                onClick={logout}
                className="w-full text-left py-2 border-b border-transparent text-red-600/80 hover:text-red-600 font-medium mt-8 transition-colors"
              >
                Sign Out
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            {activeTab === "details" && (
              <div className="bg-white p-8 md:p-10 shadow-sm border border-vara-charcoal/5">
                <h2 className="text-xl font-serif mb-6">Personal Information</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">Full Name</label>
                      <input 
                        defaultValue={user.name} 
                        className="w-full border-b border-vara-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-vara-charcoal transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-vara-charcoal/70">Email Address</label>
                      <input 
                        disabled
                        defaultValue={user.email} 
                        className="w-full border-b border-vara-charcoal/10 py-2 bg-transparent text-vara-charcoal/50 cursor-not-allowed" 
                      />
                      <p className="text-[10px] text-vara-charcoal/40">Email cannot be changed.</p>
                    </div>
                  </div>
                  <Button type="button" className="mt-8">Save Changes</Button>
                </form>
              </div>
            )}

            {activeTab === "orders" && (
              <div>
                <h2 className="text-xl font-serif mb-6">Order History</h2>
                <div className="bg-white p-8 md:p-10 shadow-sm border border-vara-charcoal/5 text-center flex items-center justify-center flex-col py-16">
                  <div className="w-16 h-16 bg-vara-cream rounded-full flex items-center justify-center mb-4">
                    <span className="text-vara-charcoal/40">📦</span>
                  </div>
                  <p className="text-lg font-medium text-vara-charcoal/70">You haven't placed any orders yet.</p>
                  <p className="text-sm text-vara-charcoal/50 mt-2">When you purchase an item, it will appear here with tracking details.</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

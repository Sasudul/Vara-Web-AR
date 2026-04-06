import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Button } from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

export function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { login, register } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await login({ email, password });
      } else {
        await register({ name, email, password });
      }
      onClose();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-vara-cream p-8 shadow-2xl rounded-sm"
        >
          <button onClick={onClose} className="absolute right-4 top-4 text-vara-charcoal/60 hover:text-vara-charcoal">
            <X className="w-5 h-5" />
          </button>
          
          <h2 className="text-3xl font-serif mb-6 text-center text-vara-charcoal">
            {isLogin ? "Welcome Back" : "Join Vara"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-vara-charcoal">
            {error && <div className="p-3 bg-red-100 text-red-800 text-sm">{error}</div>}
            
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-vara-charcoal/20 bg-white focus:outline-none focus:border-vara-charcoal"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-vara-charcoal/20 bg-white focus:outline-none focus:border-vara-charcoal"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-vara-charcoal/20 bg-white focus:outline-none focus:border-vara-charcoal"
              />
            </div>

            <Button type="submit" size="lg" className="w-full !mt-6">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-vara-charcoal/60">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="font-medium text-vara-charcoal hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

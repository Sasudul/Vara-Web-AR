import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // E-commerce specific fields
    wishlist: [{ type: String }], // Array of Product IDs
    cart: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true, default: 1 },
        material: { type: String, required: true }
      }
    ]
  },
  { timestamps: true }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export const User = mongoose.model("User", userSchema);

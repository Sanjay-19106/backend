import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();



router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // ✅ Only allow this admin account
  if (
    email === "admin@gmail.com" &&
    password === "admin123"
  ) {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
});

export default router;
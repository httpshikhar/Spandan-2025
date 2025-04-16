import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import app from "./app.js";

// Load .env variables
dotenv.config();

// CORS setup — super important when frontend and backend are on different domains
app.use(cors({
  origin: process.env.PORTFOLIO_URL, // like: https://your-frontend.vercel.app
  credentials: true
}));

// Health check route
app.get("/", (req, res) => {
  res.send("Backend is live 🚀");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

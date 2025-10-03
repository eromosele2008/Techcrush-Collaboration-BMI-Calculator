// routes.js
import express from "express";
import { calculateBMI } from "./bmiApi.js";

const router = express.Router();

// POST 
router.post("/bmi", (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height) {
    return res
      .status(400)
      .json({ error: "Body weight and height are required" });
  }

  const result = calculateBMI(parseFloat(weight), parseFloat(height));
  res.json(result);
});

export default router;

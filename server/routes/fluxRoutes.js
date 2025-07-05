import express from "express";
import * as dotenv from "dotenv";

import cors from "cors";
import Together from "together-ai";

dotenv.config();

const router = express.Router();

const together = new Together({ apiKey: process.env.TOGETHER_AI_API_KEY });

router.use(cors());
router.route("/").get((req, res) => {});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-schnell-Free",
      prompt: prompt,
      steps: 4,
      n: 1,
    });

    console.log(response);

    const imageUrl = response.data[0].url;

    console.log("Image generated successfully!");

    res.status(201).json({ success: true, photo: imageUrl });
  } catch (error) {
    console.log("Error generating Image.\n", error);
  }
});

export default router;
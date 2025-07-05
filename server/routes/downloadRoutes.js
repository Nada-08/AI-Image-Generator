import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const { url, filename } = req.query;

  if (!url) {
    return res
      .status(400)
      .json({ success: false, message: "Missing image URL" });
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to fetch image" });
    }

    const contentType = response.headers.get("content-type");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.set("Content-Type", contentType);

    if (filename) {
      res.set("Content-Disposition", `attachment; filename="${filename}"`);
    }

    res.send(buffer);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;

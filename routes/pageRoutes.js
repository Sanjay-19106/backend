import express from "express";
import Page from "../models/Page.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * GET page data
 */
router.get("/", async (req, res) => {
  const page = await Page.findOne();
  res.json(page);
});

/**
 * SAVE / UPDATE page data
 */
router.post("/", authMiddleware, async (req, res) => {
  const existing = await Page.findOne();

  if (existing) {
    existing.settings = req.body.settings;
    existing.sections = req.body.sections;
    await existing.save();
    return res.json({ message: "Updated" });
  }

  const page = new Page(req.body);
  await page.save();
  res.json({ message: "Created" });
});

export default router;

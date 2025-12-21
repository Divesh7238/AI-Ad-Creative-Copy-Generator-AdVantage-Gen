import express from "express";
import { generateAdImage } from "../controllers/image.controller.js";
import { generateCampaign } from "../controllers/campaign.controller.js";

const router = express.Router();
router.post("/generate-image", generateAdImage);
router.post("/generate-campaign", generateCampaign);

export default router;

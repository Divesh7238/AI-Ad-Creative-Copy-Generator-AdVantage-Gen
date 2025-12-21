import { enhancePrompt } from "../services/prompt.service.js";
import { generateImage } from "../services/image.service.js";
import { generateCopy } from "../services/copy.service.js";

export const generateCampaign = async (req, res) => {
  try {
    const { prompt, tone } = req.body;

    if (!prompt || !tone) {
      return res.status(400).json({
        error: "prompt and tone are required"
      });
    }

    const enhancedPrompt = await enhancePrompt(prompt);
    const image = await generateImage(enhancedPrompt);
    const copy = await generateCopy(prompt, tone);

    return res.status(200).json({
      success: true,
      image: image,
      caption: copy.caption,
      hashtags: copy.hashtags
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || "Campaign generation failed"
    });
  }
};

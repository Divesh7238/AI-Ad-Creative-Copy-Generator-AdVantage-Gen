import { enhancePrompt } from "../services/prompt.service.js";
import { generateImage } from "../services/image.service.js";

export const generateAdImage = async (req, res) => {
  const { prompt } = req.body;

  const enhanced = await enhancePrompt(prompt);
  const image = await generateImage(enhanced);

  res.send(image);
};

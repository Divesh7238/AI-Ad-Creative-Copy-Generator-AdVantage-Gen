import axios from "axios";

export const enhancePrompt = async (prompt) => {
  const enhancedPrompt = `
  Create a highly detailed, cinematic ad image description for:
  "${prompt}"
  Include lighting, environment, mood, and realism.
  `;
  return enhancedPrompt;
};

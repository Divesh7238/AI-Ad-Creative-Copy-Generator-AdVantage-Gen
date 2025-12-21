export const generateCopy = async (prompt, tone) => {
  return {
    caption: `${tone} ad copy for ${prompt}`,
    hashtags: ["#AdVantageGen", "#AIAds", "#Marketing"],
  };
};

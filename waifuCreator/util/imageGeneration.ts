import axios from 'axios';

export const generateImageFromPrompt = async (
  prompt: string,
  width: number = 1024,
  height: number = 576,
): Promise<string> => {  try {
    console.log("generating image with prompt:", prompt);
    
    const firebaseResponse = await axios.post(
      "http://127.0.0.1:3002/oniichat-2c310/us-central1/generateImage",
      {
        prompt: `score_9,score_8_up,score_7_up,source_anime, ${prompt}`,
        steps: 30,
        width: 1360,
        height: 1024,
        cfgScale: 10,
        negativePrompt: "text, watermark, nude, (2girls), ((lesbians)), (multiple characters), photorealistic style, golf clubs,glow,  deformed accesories, realistic,monochrome,greyscale,worst quality, bad eyes, artist name, signature, watermark, simple background,missing finger, bad hands, muscular, deformed legs"
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }
    );

    const imageUrl = firebaseResponse.data;
    return imageUrl;

  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image');
  }
};
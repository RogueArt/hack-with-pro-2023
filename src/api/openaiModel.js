import { Configuration, OpenAIApi } from "openai";

import axios from 'axios';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);



const CHAT_GPT_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

export async function callChatGPT(prompt, apiKey) {
  try {
    const response = await axios.post(
      CHAT_GPT_API_URL,
      {
        prompt,
        max_tokens: 50, // You can adjust the maximum response length here
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      },
    );

    const result = response.data.choices[0].text;
    return result;
  } catch (error) {
    console.error('Error calling the ChatGPT API:', error);
    throw error;
  }
}

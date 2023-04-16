import { Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = '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';
const MODEL = 'gpt-3.5-turbo';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function generateResponse(request) {
  try {
    const response = await openai.createChatCompletion({
      model: MODEL,
      messages: request.messageList,
      temperature: 0.2
    })
    return response
  } catch(error) {
    console.error(error.response.status, error.response.data);
  }
}

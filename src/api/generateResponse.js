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
      // messages: request.messages,
      messages: [{"role": "user", "content": "How to get good at computer science?"}]})
    console.log(response.data);
    // form response
    // return response
  } catch(error) {
    console.error(error.response.status, error.response.data);
    // response.status(error.response.status).json(error.response.data);
  }
}

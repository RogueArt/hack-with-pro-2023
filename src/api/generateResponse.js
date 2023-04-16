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
    })
    console.log(response.data);
    return response
  } catch(error) {
    console.error(error.response.status, error.response.data);
    // response.status(error.response.status).json(error.response.data);
  }
}

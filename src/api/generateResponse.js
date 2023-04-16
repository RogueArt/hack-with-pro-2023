import { Configuration, OpenAIApi } from "openai";
import OpenaiResponse from "../models/responses/openaiResponse";
import ScheduledTask from "../models/scheduledTask";

const OPENAI_API_KEY = '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';
const MODEL = 'gpt-3.5-turbo';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const formatResponse = (message) => {
  let response  = [];
  const scheduledTaskStrings = message.split('\n');
  for (let i = 0; i < scheduledTaskStrings.length; i++) {
    const task = scheduledTaskStrings[i];
    const fields = task.split(' | ');
    const taskName = fields[0];
    const day = fields[2];
    const timeRange = fields[1].split(' - ')
    response.push(new ScheduledTask(taskName, day, timeRange[0], timeRange[1]));
  }

  return response;
}

export default async function generateResponse(request) {
  try {
    const response = await openai.createChatCompletion({
      model: MODEL,
      messages: request.messageList,
      temperature: 0.2
    })

    const formattedResponse = formatResponse(response.choices[1]);
    console.log(formattedResponse);
    return formattedResponse
  } catch(error) {
    console.error(error.response.status, error.response.data);
  }
}

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
    // console.log(response);
    const formattedResponse = formatResponse(response.data.choices[0].message.content);
    console.log(formattedResponse);
    return formattedResponse
  } catch(error) {
    console.error(error.response.status, error.response.data);
  }
}

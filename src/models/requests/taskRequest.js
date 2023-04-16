import Message from "../message";
import { USER_ROLE, RULES_MESSAGE } from "../../api/constants";

const processTaskList = (message, taskList) => {
    message += 'Here is the input list of tasks\n';
    let taskListLength = taskList.length;
    for (let i = 0; i < taskListLength; i++) {
        let task = taskList[i];
        message += `${task.content} - ${task.duration} - ${task.priority}\n`;
    }
    return message;
};

const processEventList = (message, eventList) => {
    message += 'Here is the input list of events\n';
    let eventListLength = eventList.length;
    for (let i = 0; i < eventListLength; i++) {
        let event = eventList[i];
        message += `${event.content} | ${event.startTime} - ${event.endTime} | ${event.day}\n`;
    }
    return message;
}

// TaskList is an array of Task objects
export default function OpenaiRequest(taskList, eventList) {
    this.messageList = [
        new Message(USER_ROLE, RULES_MESSAGE)
    ];

    let message = '';
    message = processTaskList(message, taskList);
    message = processEventList(message, eventList);
    this.messageList.push(new Message(USER_ROLE, message));
}
import Message from "../message";
import { USER_ROLE, RULES_MESSAGE } from "../../api/constants";

// TaskList is an array of Task objects
export default function TaskListOpenaiRequest(taskList) {
    this.messageList = [
        new Message(USER_ROLE, RULES_MESSAGE)
    ];

    let taskString = 'Here is the input list of tasks\n';
    let taskListLength = taskList.length;
    for (let i = 0; i < taskListLength; i++) {
        let task = taskList[i];
        taskString += `${task.content} - ${task.duration} - ${task.priority}\n`;
    }
    this.messageList.push(new Message(USER_ROLE, taskString));
}
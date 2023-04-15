import Message from "../message";

const ROLE = 'user';

// TaskList is an array of Task objects
export default function TaskListOpenaiRequest(taskList) {
    this.messageList = [];

    let taskListLength = taskList.length;
    for (let i = 0; i < taskListLength; i++) {
        let task = taskList[i];
        this.messageList.push(new Message(ROLE, task));
    }
}

// todo.js
import { title, description, priority, dueDate } from "./modal";

export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

// Function to return a fresh Todo from current input values
export function createNewTodo() {
  return new Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );
}


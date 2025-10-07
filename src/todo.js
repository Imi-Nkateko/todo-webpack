//export const todo = "clean your bedroom";

class todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const newTodo = new todo("blah", "lorem100", "2025-06-26", "important");
console.log(newTodo);

/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todolist= new Array();
    this.size = 0;
  }
   add(todo) {
    this.todolist.push(todo);
  }
   remove(indexOfTodo) {
    this.todolist.slice(indexOfTodo,1);
  }
   update(index, updatedTodo) {
    if(indexOfTodo < this.todolist.length) this.todolist[index] = updatedTodo;
  }
   getAll() {
    return this.todolist;
   }
   get(indexOfTodo) {
    return this.todolist[indexOfTodo];
   }
   clear() {
    this.todolist.length = 0;
   }
}

module.exports = Todo;

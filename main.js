var todolist = {
  todo: [],
  displayTodo: function() {
    console.log("Todolist :");
    for (var i = 0; i < this.todo.length; i++) {
      if (this.todo[i].completed) console.log("(X)", this.todo[i].text);
      else {
        console.log("( )", this.todo[i].text);
      }
    }
  },
  addTodo: function(text) {
    this.todo.push({
      completed: false,
      text: text
    });
    this.displayTodo();
  },
  changeTodo: function(index, value) {
    this.todo[index].text = value;
    this.displayTodo();
  },
  deleteTodo: function(index) {
    this.todo.splice(index, 1);
    this.displayTodo();
  },
  toggleCpmpleted: function(index) {
    this.todo[index].completed = true;
    this.displayTodo();
  }
};

todolist.addTodo("Item1");
todolist.addTodo("Item2");
todolist.addTodo("Item3");
todolist.addTodo("Item4");
todolist.addTodo("Item5");
document
  .getElementById("DisplayAllButtons")
  .addEventListener("click", function() {
    todolist.displayTodo();
  });

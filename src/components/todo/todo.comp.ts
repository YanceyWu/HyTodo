import { Component, OnInit, DoCheck } from "@angular/core";

import { todoItem } from "../../dataModel/todoItem";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.comp.html",
//   styleUrls: ["./todo.comp.scss"]
})
export class TodoComponent implements OnInit, DoCheck {
  todos: todoItem[];
  filterTodos:todoItem[];
  todoID: number = 3;
  filter: string = "all";
  constructor() {}

  handleDel(Id: number): void {
    console.log("receive call from item componment,reveice id: " + Id);
    this.filterTodos = this.todos.filter(function(item) {
      return item.id !== Id;
    });
  }
  addTodo(evt: any): void {
    if (evt.target.value) {
      this.todoID = this.todoID++;
      this.todos.push(new todoItem(this.todoID, evt.target.value));
      evt.target.value = "";
    } else {
      alert("Please enter the content!!");
    }
  }
  clearAllCompleted($event){
    console.log($event);
    this.todos = this.todos.filter(todo => !todo.completed);

  }
  toggle(state: string) {
    console.log("call toggle in todo componment: " + state);
    this.filter = state;
  }
  ngDoCheck() {
    console.log("doCheck called");
    if (this.filter !== "all") {
      const completed = this.filter === "completed";
      // 将todos数组中，completed为true的值过滤出来，并返回一个新数组
      this.filterTodos = this.todos.filter(todo => completed === todo.completed);
    }else{
      this.filterTodos = this.todos;
    }
  }

  ngOnInit() {
    let todolist = [
      new todoItem(1, "hello world"),
      new todoItem(2, "hey jude"),
      new todoItem(3, "lalve poria pteae")
    ];
    this.todos = todolist;
    //this.todos.push(new todoItem(1, "好好学习"));
    //this.todos = todolist;
    for (const item of this.todos) {
      console.log("forof in ngonitie" + item.id);
    }
  }
}

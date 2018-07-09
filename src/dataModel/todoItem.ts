export class todoItem {
    //test
    content: String;
    id: Number;
    completed: Boolean;

    constructor(id: Number, content: String, completed: Boolean = false) {
        this.content = content;
        this.id = id;
        this.completed = completed;
    }
}
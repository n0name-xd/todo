import { observable } from "mobx";

type TypeStore = {
    change: Function,
    style: any,
    todo: any,
    todosArr: any[],
    addTodo: Function,
    listen: Function,
    delTodo: Function
}

class Todo {
    id: any
    text: string

    constructor(id: any, text: string) {
        this.id = id;
        this.text = text;
    }
}

const store: TypeStore = observable({
    style: {                                        //Change background
        isToggle: false
    },

    todosArr: [],

    todo: {                                         //todo
        text: ""
    },

    listen(e: any): void {
        store.todo.text = e.target.value
    },

    change(): void {                                //Change background
        this.style.isToggle = !this.style.isToggle;
    },

    addTodo(): void {    
        if (!store.todo.text) {                     //Add todo
            alert("Input text!!!")
            return;
        }                          
        store.todosArr.push(new Todo(new Date().toISOString(), store.todo.text))
        store.todo.text = "";
    },

    delTodo(topIndex: number): void {               //Delete todo
        store.todosArr = store.todosArr.filter((item: any, index: number) => index !== topIndex)
    }
});

export default store;




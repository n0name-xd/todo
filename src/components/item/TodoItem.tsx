import styles from "./TodoItem.module.css";
import store from "../store/store";
import { observer } from "mobx-react";
import Button from "../button/Button";

const TodoItem = () => {

    const todoList = store.todosArr
        .map((elem: any, index: number) => 
            <li key={elem.id} className={styles.todo}>
                <div>
                    {elem.text}
                </div>
                <div className={styles.button}>
                    <Button type={() => store.delTodo(index)} text="X" /> 
                </div>
            </li>)

    return (
        <div className={styles.div}>
            <ul>
                {todoList}
            </ul>
        </div>
    )
}

export default observer(TodoItem);
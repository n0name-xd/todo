import TodoItem from "../item/TodoItem";
import Button from "../button/Button";
import Textaria from "../texteria/Textaria";
import Time from "../time/Time";
import styles from "./Main.module.css";
import { observer } from "mobx-react";
import store from "../store/store";

const Main = () => {

    const classNameGrey = styles.main_grey;
    const classNameBlack = styles.main_black;

    const color = store.style.isToggle === false ? classNameBlack : classNameGrey;

    return (
        <div className={styles.main + " " + color}>
            <div className={color}>
                <div className={styles.nav}>
                    <Textaria />
                    <div className={styles.button}>
                        <Button type={store.addTodo} text="Create Task"/>
                    </div>
                </div>
                <div className={styles.time}>
                    <Time />
                </div>
            </div>
            <div className={styles.items}>
                <TodoItem />
            </div>
        </div>
    )
}

export default observer(Main)
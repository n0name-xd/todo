import styles from "./Header.module.css";
import Toggle from "../toggle/Toggle";
import store from "../store/store"; 
import { observer } from "mobx-react";

const Header = () => {

    const classNameGrey = styles.header_grey;
    const classNameBlack = styles.header_black;

    return (
        <div className={store.style.isToggle === false ? classNameBlack : classNameGrey }> 
            <div className={styles.title}>
                <h1>My todo</h1>
            </div>
            <div className={styles.button}>
                <Toggle label="Color" />
            </div>
        </div>
    )
}

export default observer(Header);  
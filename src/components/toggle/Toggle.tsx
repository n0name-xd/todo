import styles from "./Toggle.module.css";
import store from "../store/store";
import { observer } from "mobx-react";
  
const Toggle = ({ label }: any) => {

  return (
    <div className={styles.container}>
      <div className={styles.toggle_switch}>
        <input type="checkbox" className={styles.checkbox} onChange={() => store.change()}
               name={label} id={label} />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
    </div>
  );    
};
  
export default observer(Toggle);
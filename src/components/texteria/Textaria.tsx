import style from "./Textaria.module.css";
import { observer } from "mobx-react";
import store from "../store/store";

const Textaria = () => {

    return (
        <div className={style.textaria}>
            <input type="text" 
                   className={style.input}    
                   onChange={e => store.listen(e)}   
                   value={store.todo.text} 
            />
        </div>
    )
}

export default observer(Textaria);
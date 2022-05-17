import style from "./Button.module.css";

type ButtonPropsType = {
    type?: any,
    text: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <button className={style.button} 
                onClick={ props.type }

        >
            {props.text}
        </button>
    )
}

export default Button;
import React, { useState, useEffect } from "react";
import styles from "./Time.module.css";

const Time = () => {

    const getTime = () => {
        const date = new Date();
        const seconds = (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
        const minuts = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
        const hours = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours());
        const result = `${hours}:${minuts}:${seconds}`;

        return result;
    }

    const [time, setCount] = useState<any>(getTime());

    useEffect(() => {
        setInterval(() => {
            setCount(getTime())
        }, 0)
    }, [time])

    return (
        <div className={styles.time}>
            <div className={styles.time_item}>{time}</div>
        </div>
    )
}

export default Time;
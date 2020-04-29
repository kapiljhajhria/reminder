import React, {useEffect, useState} from "react";
import './styles.css'

export default function Timer(props) {
    const [endTimeInMilliseconds, setEndTimeInMilliseconds] = useState(new Date(props.endTimeInMili).getTime());
    const [countdown, setCountDown] = useState("");
    let intervalId;

    function getCountDownFromMilliseconds(endTime) {
        endTime = endTime - new Date().getTime();

        let seconds = Math.floor((endTime / 1000) % 60)
        let minutes = Math.floor((endTime / (1000 * 60)) % 60)
        let hours = Math.floor((endTime / (1000 * 60 * 60)) % 24)
        let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) % 24)

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            clearInterval(intervalId);
            setCountDown(days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s");
            console.log("intervalId: "+intervalId)
            props.onTimerEnd();
            return;
        }// console.log(
        setCountDown(days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s");
// days + "d:" + hours + "h:" + minutes + "m:" + seconds+"s")
    }
    function startTimer(){
        intervalId = setInterval(() => {
            getCountDownFromMilliseconds(endTimeInMilliseconds);
        }, 1000)
    }
    useEffect(() => {
        startTimer();
        // getCountDownFromMilliseconds(endTimeInMilliseconds)
    }, [1])
    return (
        <div className="timer">
            {countdown}
        </div>
    )
}



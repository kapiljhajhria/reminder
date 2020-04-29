import React, {useState} from "react";
import './styles.css'
import Timer from "../Timer";

export default function GetInput(props) {
    const [endTime, setEndTime] = useState("");
    const [endTimesList, setEndTimesList] = useState([]);

    let tempEndTime;


    return (
        <div className="add-reminder-cont">
            <div>
                <input type="datetime-local" onChange={(dateTimeEntered) => {
                    setEndTime(dateTimeEntered.target.value);
                }}/>
            </div>
            <div>
                <button onClick={() => {
                    let tempEndTimeList = [].concat(endTimesList)
                    tempEndTimeList.push(endTime)
                    setEndTimesList(tempEndTimeList);
                }}>
                    Set Reminder
                </button>
            </div>
            <div className="timersListCol">
                {endTimesList.map((t) => (
                    <Timer key={t} endTimeInMili={t}>
                        <div>
                            {t}</div>
                    </Timer>
                ))
                }
            </div>
        </div>
    )
}
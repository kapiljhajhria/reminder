import React from "react";
import './styles.css'
import Timer from "../Timer";

export default class GetInput extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            endTime: "",
            endTimesList: [],
        }
    }
    // const [endTime, setEndTime] = useState("");
    // const [endTimesList, setEndTimesList] = useState([]);


    filterEndTimesList=(endTimeToRemove)=>{
        console.log("called parent function from child ofr key: " +endTimeToRemove);
        console.log("endtimes list length is: "+this.state.endTimesList.length);
        console.log(this.state.endTimesList)
        let endTimesListCopy=[].concat(this.state.endTimesList);
        endTimesListCopy=[].concat(endTimesListCopy.filter((et)=>et!==endTimeToRemove));
        console.log("len of endList now:"+endTimesListCopy.length)
        this.setState({
            endTimesList:endTimesListCopy
        })
        alert("Timer Ended. Its now: "+endTimeToRemove)
    }
    // useEffect(()=>{},[endTimesList])
    render() {
        return (
            <div className="add-reminder-cont">
                <div>
                    <input type="datetime-local" onChange={(dateTimeEntered) => {
                        this.setState({
                            endTime:dateTimeEntered.target.value
                        })
                    }}/>
                </div>
                <div>
                    <button onClick={() => {
                        let tempEndTimeList = [].concat(this.state.endTimesList)
                        tempEndTimeList.push(this.state.endTime.toString())
                        this.setState({
                            endTimesList:tempEndTimeList
                        })
                    }}>
                        Set Reminder
                    </button>
                </div>
                <div className="timersListCol">
                    {this.state.endTimesList.map((t) => (
                        <Timer key={t} endTimeInMili={t} onTimerEnd={(t) =>
                            this.filterEndTimesList(t)
                        }>
                            <div>
                                {t}</div>
                        </Timer>
                    ))
                    }
                </div>
            </div>
        )
    }
}
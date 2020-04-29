import React from "react";
import './styles.css'
import Timer from "../Timer";

class GetInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datetime: "12/12/1212",

            endTimeList: [],

        }
    }

    onBtnPress() {
        // console.log(this.state.datetime)
        // console.log("above this is the time from input field, end time of timer")
        // console.log(new Date(this.state.datetime).getTime())
        let endTimeListCopy = [].concat(this.state.divList);
        endTimeListCopy.push(this.state.datetime);
        return (
            this.setState({
                endTimeList: endTimeListCopy,
            })
        );


    }

    // endTimeFromInput

    async removeElementFromList() {
        console.log("filtering list")
        let endTimeListCopy = [].concat(this.state.endTimeList);
        endTimeListCopy = endTimeListCopy.filter((endTime) => (new Date(endTime).getTime() - Date.now()) > 0);

        this.setState({
            endTimeList: endTimeListCopy,
        })
        alert('Timer Completed, Its ' + new Date(Date.now()).toLocaleTimeString() + " now");
    }

    isFutureTimer(endTime) {
        let deadline = new Date(endTime).getTime();
        let timeNow = new Date().getTime();
        return deadline - timeNow > 0;
    }

    getTimersDivList() {
        return this.state.endTimeList.map((endTime) => this.isFutureTimer(endTime) ?
            <div className={"rem"}>
                <div>
                    <Timer key={endTime} dateTime={endTime}
                           removeElementFromList={() => this.removeElementFromList()}/>
                </div>
            </div> : ""
        )
    }

    render() {
        return (
            <div>
                <div className={"all-el"}>
                    <input className="datetimepicker" type="datetime-local" onChange={(newDateEvent) => {
                        this.setState({datetime: newDateEvent.target.value});
                    }}/>

                    <button className={"add-rem-btn"}
                            onClick={() => this.onBtnPress()}
                    >
                        Add Reminder
                    </button>
                </div>
                {this.getTimersDivList()}
            </div>
        );
    }
}

export default GetInput;
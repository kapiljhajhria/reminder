import React from "react";
import './styles.css'
import Timer from "../Timer";

class GetInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datetime: "12/12/1212",

            divList: [],

        }
    }

    onBtnPress() {
        // console.log(this.state.datetime)
        // console.log("above this is the time from input field, end time of timer")
        // console.log(new Date(this.state.datetime).getTime())
        let divListCopy = [].concat(this.state.divList);
        divListCopy.push(this.state.datetime);
        return (
            this.setState({
                divList: divListCopy,
            })
        );


    }

    // endTimeFromInput

    removeElementFromList() {
        console.log("filtering list")
        let copyList = [].concat(this.state.divList);
        copyList = copyList.filter((endTime) => (new Date(endTime).getTime() - Date.now()) > 0);
        this.setState({
            divList: copyList,
        })
        // alert('Timer Completed, Its ' + new Date(Date.now()).toLocaleTimeString() + " now");
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
                {this.state.divList.map((endTime) => (
                        <div className={"rem"}>
                            <div>
                                <Timer key={endTime} dateTime={endTime}
                                       removeElementFromList={() => this.removeElementFromList()}/>
                            </div>
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default GetInput;
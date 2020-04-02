import React from "react";
import './styles.css'
import Timer from "../Timer";

class GetInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datetime:"12/12/1212",

            divList: [
                <div>Hello there</div>,
                <div className={"all-el"}>
                    <input className="datetimepicker" type="datetime-local" onChange={(newDateEvent)=>{
                        this.setState({ datetime:newDateEvent.target.value});
                    }}/>

                    <button className={"add-rem-btn"}
                            onClick={() => this.onBtnPress()}
                    >
                        Add Reminder
                    </button>
                </div>
            ],

        }
    }

    onBtnPress() {
        let divListCopy = [].concat(this.state.divList);
        divListCopy.push(
            <div className={"rem"}><div>
                <Timer dateTime={this.state.dateTime}></Timer>
                <div>{this.state.datetime}</div>
            </div></div>

        );
        return (
            this.setState({
                divList: divListCopy,
            })

        );


    }


    render() {
        return (
            this.state.divList
        );
    }
}

export default GetInput;
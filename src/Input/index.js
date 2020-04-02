import React from "react";
import './styles.css'

class GetInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divList: [
                <div>Hello there</div>,
                <div className={"all-el"}>
                    <input className="datetimepicker" type="datetime-local" onChange=""/>
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
            <div className={"rem"}>Reminder Added</div>
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
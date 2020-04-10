import React from "react";
import './styles.css'
import Timer from "../Timer";

class GetInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datetime:"12/12/1212",

            divList: [

                <div className={"all-el"}>
                    <input className="datetimepicker" type="datetime-local" onChange={(newDateEvent)=>{
                        this.setState({ datetime:newDateEvent.target.value});
                    }}/>

                    <button className={"add-rem-btn"}
                            onClick={() => this.onBtnPress()}
                    >
                        Add Reminder
                    </button>
                </div>,

            ],

        }
    }

    onBtnPress() {
        let divListCopy = [].concat(this.state.divList);
        divListCopy.push(
            <div className={"rem"}><div>
                <Timer key={(this.state.datetime)} dateTime={this.state.datetime} listIndex={this.state.divList.length} removeElementFromList={(index)=>this.removeElementFromList(index)}/>
            </div></div>

        );
        return (
            this.setState({
                divList: divListCopy,
            })

        );


    }
    removeElementFromList(index){
        let copyList=[].concat(this.state.divList);
        copyList.splice(index,1);
        this.setState({
            divList:copyList,
        })
    }


    render() {
        return (
            this.state.divList
        );
    }
}

export default GetInput;
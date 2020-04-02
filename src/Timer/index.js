import React from "react";
import './styles.css'


class Timer extends React.Component {

    render() {
        return (
            <div>This is from Timer
            <div>
                {this.props.dateTime}
            </div>
            </div>
        );
    }
}

export default Timer;

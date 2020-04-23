import React from "react";
import './styles.css'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromTime: this.props.dateTime,
            countdown: 'Starting Timer',

        }
    }

    startTimer(stringTime) {

        console.log('string is :' + stringTime);
        let deadline = new Date(stringTime).getTime();

        let x = setInterval(() => {
            let now = new Date().getTime();
            let t = deadline - now;
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((t % (1000 * 60)) / 1000);
            if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
                console.log("timer ended")
                clearInterval(x);
                this.props.removeElementFromList();
                return;
            }
            this.setState({
                countdown: days + "d "
                    + hours + "h " + minutes + "m " + seconds + "s ",
            });

        }, 1000);
    }

    componentDidMount() {
        this.startTimer(this.state.fromTime);
    }

    callParentFunction(e) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        return (
            <div>
                {this.state.countdown}
            </div>
        );
    }
}

export default (Timer);

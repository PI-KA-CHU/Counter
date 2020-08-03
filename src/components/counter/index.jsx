import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }))
        this.props.onIncrease()
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }))
        this.props.onDecrease()
    }

    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <span>{this.state.value}</span>
                <button onClick={this.onIncrease}>+</button>
            </div>
        )
    }
}

export default Counter
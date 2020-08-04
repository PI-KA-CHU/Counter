import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0 }
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }))
        this.props.addNumber(1)
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }))
        this.props.subNumber(1)
    }

    render() {
        return (
            <div>
                <span>{this.state.value}</span>
                <button onClick={this.onDecrease}>-</button>
                <button onClick={this.onIncrease}>+</button>
            </div>
        )
    }

    componentWillUnmount() {
        this.props.resetToZero(this.state.value)
    }
}

export default Counter
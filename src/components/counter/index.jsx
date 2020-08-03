import React from 'react'



class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, size: 0 };
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

    static getDerivedStateFromProps(props, state) {
        if (props.size !== state.size) {
            return {
                value: 0,
                size: props.size
            }
        }
        return null;
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
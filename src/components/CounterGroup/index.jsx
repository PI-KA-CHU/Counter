import React from 'react'
import Counter from '../counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, totalCount: 0 };
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        })
    }

    handleIncrese = () => {
        this.setState((prevState) => ({
            totalCount: prevState.totalCount + 1
        }))
    }

    handleDecrese = () => {
        this.setState((prevState) => ({
            totalCount: prevState.totalCount - 1
        }))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];

        return (
            <div>
                <div>
                    <label>
                        Group size:
                    <input defaultValue={0} onBlur={this.handleResize} />
                    </label>
                </div>
                <div>
                    <label>
                        Total Number: {this.state.totalCount}
                    </label>
                </div>
                {
                    initArray.map(key => <Counter onIncrease={this.handleIncrese} onDecrease={this.handleDecrese} key={key} />)
                }
            </div>
        )
    }

}

export default CounterGroup
import React from 'react'
import Counter from '../Counter';
import { unmountCounter } from '../../action'
import { connect } from 'react-redux';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0};
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        })
    }

    unmountCounter = (value) => {
        this.props.store.dispatch(unmountCounter(value ? parseInt(value) : 0))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];
        // debugger
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
                        Total Number: {this.props.sum}
                    </label>
                </div>
                {
                    initArray.map(key => <Counter
                        addNumber={this.props.addNumber}
                        subNumber={this.props.subNumber}
                        resetToZero={this.props.resetToZero}
                        key={key}
                    />)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {sum: state.counter}
}

const mapDispatchToProps = dispatch => ({
    addNumber: (number) => dispatch({type: 'ADD_NUMBER', number}),
    subNumber: (number) => dispatch({type: 'SUB_NUMBER', number}),
    resetToZero: (number) => dispatch({type: 'RESET_TO_ZERO', number})
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)
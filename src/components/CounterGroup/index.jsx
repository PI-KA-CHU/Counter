import React from 'react'
import Counter from '../Counter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNumberAction, subNumberAction, resetToZeroAction } from '../../action';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0 };
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        })
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
                        Total Number: {this.props.totalCount}
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
    return { totalCount: state.totalCount }
}

const mapDispatchToProps = {
    addNumber: addNumberAction,
    subNumber: subNumberAction,
    resetToZero: resetToZeroAction
}

CounterGroup.propTypes = {
    totalCount: PropTypes.number.isRequired,
    addNumber: PropTypes.func.isRequired,
    subNumber: PropTypes.func.isRequired,
    resetToZero: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)
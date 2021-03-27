import React, { Component } from 'react';

class Reset extends Component {
    resetValue = (value) => {
        this.props.onReset(value);
    }
    render() {
        return (
            <button type="button" className="btn btn-lg btn-primary" onClick={() => this.resetValue(1)}>reset</button>   
        );
    }
}

export default Reset;
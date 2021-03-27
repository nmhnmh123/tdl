import React, { Component } from 'react';

class SizeSetting extends Component {

    changeSize = (value) => {
        this.props.onChangeSize(value);
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontsize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success btn-block" onClick={() => this.changeSize(-2)}>Giảm</button>
                    <button type="button" className="btn btn-success btn-block" onClick={() => this.changeSize(2)}>Tăng</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
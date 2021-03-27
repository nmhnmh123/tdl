import React, { Component } from 'react';
import '../App.css';
import ColorPicker from './ColorPicker'
import Reset from './Reset'
import Result from './Result'
import SizeSetting from './SizeSetting'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontsize: 12
        };
    }
    onSetColor = (params) => {
        this.setState({
            color: params
        })
    }

    onSetSize = (params) => {
        let size = this.state.fontsize + params
        if (size <= 36 && size >= 8) {
            this.setState({
                fontsize: size
            })
        }

    }

    onReset = (params) => {
        if (params === 1) {
            this.setState({
                color: 'red',
                fontsize: 12
            })
        }
    }
    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting fontsize={this.state.fontsize} onChangeSize={this.onSetSize} />
                        <Reset onReset={this.onReset} />
                    </div>

                    <Result color={this.state.color} fontsize={this.state.fontsize} />
                </div>
            </div>
        );
    }
}

export default Main;
import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'blue', 'green', 'yellow', 'gray', 'purple', 'orange', 'cyan'],
        };
    }

    setActiveColor = (color) =>{
       this.props.onReceiveColor(color);
    }

    render() {
        let elmColors = this.state.colors.map((color, index) => {
            return <span 
                key={index} 
                style={{backgroundColor : color}}
                className={this.props.color === color ? 'active' : ''}
                onClick = {() => this.setActiveColor(color)}
            ></span>
        });

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color picker</h3>
                    </div>
                    <div className="panel-body">
                        {elmColors}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
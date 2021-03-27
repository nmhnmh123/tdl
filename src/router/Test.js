import React, { Component } from 'react';
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomeRouter from './HomeRouter'
import Home from './Home';
import About from './About';
import Contact from './Contact';


class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }


    onClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                {/* {this.state.isOpen ? <HomeRouter /> : ''} */}
                <button
                    type="button"
                    class="btn btn-lg btn-primary"
                    onClick={this.onClick}
                >Đăng Xuất</button>
            </div>
        );
    }
}

export default Test;
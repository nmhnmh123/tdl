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
import {Redirect} from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin : false
        }
    }
    
    onClick = () => {
        this.setState({
            isLogin : true
        })
        this.props.login();
    }

    render() {
        if(this.state.isLogin === true){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <button
                    type="button"
                    class="btn btn-lg btn-primary"
                    onClick={this.onClick}
                >Login</button>
            </div>
        );
    }
}

export default Login;
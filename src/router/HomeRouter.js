import React, { Component } from 'react';
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
//import routes from '../Routes'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Test from './Test';
import Login from './Login';
import NotFound from './NotFound';
import Menu from './Menu';
import Product from './Product';
import ThuNghiem from './ThuNghiem';
import { Redirect } from 'react-router-dom';

class HomeRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isLogin: false
        }
    }

    login = () => {
        this.setState({
            isOpen: true,
            isLogin: true
        })
    }

    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((r, index) => {
                return (
                    <Route
                        key={index}
                        path={r.path}
                        exact={r.exact}
                    >
                        {r.main}
                    </Route>
                )
            })
        }
        return result;
    }

    render() {
        const routes = [
            {
                path : "/",
                exact : true,
                main : () => <Home/>
            },
            {
                path : "/about",
                exact : false,
                main : () => <About />
            },
            {
                path : "/contact",
                exact : false,
                main : () => <Contact/>
            },
            {
                path : "/test",
                exact : false,
                main : () => <Test />
            },
            {
                path : "/login",
                exact : false,
                main : () => <Login login={this.login} isOpen={this.state.isOpen} />
            },
            {
                path : "/product",
                exact : true,
                main : ({match}) => <Product match={match}/>
            },
            {
                path : "/product/:slug",
                exact : false   ,
                main : ({match}) => <NotFound match={match}/>
            },
            {
                path : "/asd",
                exact : false   ,
                main : () => <ThuNghiem/>
            },
            {
                path : "",
                exact : false,
                main : () => <NotFound />
            }
        ]
        return (
            <Router>
                {!this.state.isLogin ? <Redirect to="/login" /> : ""}
                <div className="App">
                    {/* menu */}
                    {this.state.isLogin ? <Menu /> : ""}
                    {/* nội dung */}
                    <Switch>
                        {this.showContentMenu(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }
}



export default HomeRouter;
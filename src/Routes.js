import Home from './router/Home';
import About from './router/About';
import Contact from './router/Contact';
import Test from './router/Test';
import Login from './router/Login';
import NotFound from './router/NotFound'; 
import React from 'react';

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
        main : () => <Contact />
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
        path : "",
        exact : false,
        main : () => <NotFound />
    },
]

export default routes;
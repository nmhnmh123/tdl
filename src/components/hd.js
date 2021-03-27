import React, { Component } from 'react';


class Hd extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" href="#">Component</a>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">asd</a>
                        </li>
                        <li className="active">
                            <a href="#">dsa</a>
                        </li>
                    </ul>
                </nav>

                
            </div>
        );
    }
}

export default Hd;
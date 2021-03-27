import React, { Component } from 'react';
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Thông tin',
        to: '/about',
        exact: false
    },
    {
        name: 'Liên hệ',
        to: '/contact',
        exact: false
    },
    {
        name: 'Sản phẩm',
        to: '/product',
        exact: false
    },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? "active" : "";
            return (
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            );
        }} />
    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </nav>
        );
    }

    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (<MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />);
            })
        }
        return result;
    }
}

export default Menu;
import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" href="#">Component</a>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">Trang chủ</a>
                        </li>
                        <li className="active">
                            <a href="#">Danh mục sản phẩm</a>
                        </li>
                    </ul>
                </nav>

                
            </div>
        );
    }
}

export default Header;
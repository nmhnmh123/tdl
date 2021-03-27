import React, { Component } from 'react';
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import NotFound from './NotFound';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
            isChiTiet: false,
        }
    }
    

    render() {
        var products = [
            {
                id: 1,
                name: "IP X",
                price: 20000000,
                slug: "iphone"
            },
            {
                id: 2,
                name: "A70",
                price: 10000000,
                slug: "samsunga70"
            },
            {
                id: 3,
                name: "IPAD",
                price: 30000000,
                slug: "ipad"
            }
        ];

        var {match} = this.props;
        var url = match.url;

        var result = products.map((product, index) => {
            return (
            <NavLink to={`${url}/${product.slug}`} key={index}>
                {/* <li
                    class="list-group-item"
                    onClick = {() => {this.setState({
                        isChiTiet: true,
                    })}}
                >{product.id} - {product.name} - {product.price}
                </li> */}
                
                <button type="button" class="btn btn-primary">{product.name}</button>
                
            </NavLink>
            );
        })

        var elmSP = (
            <div>
                <h1>Danh sách sản phẩm</h1>
                <div className="row">
                    <ul class="list-group">
                        {result}
                    </ul>
                </div>
            </div>
        )

        return (
            <div className="container">
                {elmSP}
                {/* <div class="row">
                    <Route path="/product/:slug" component={NotFound}>
                    </Route>
                </div> */}
                <NavLink to='/asd'>
                    <button type="button" class="btn btn-warning">button</button>
                </NavLink>
                
                
            </div>
        );
    }
}

export default Product;
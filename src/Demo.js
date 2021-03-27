import React, { Component } from 'react';
import Header from './components/Header'
import Hd from './components/hd'
import Product from './components/Product'

class Demo extends Component {
    showProduct(product) {
        if (product.status) {
            return <h3>
                ID: {product.id} <br />
                Name: {product.name} <br />
                Price: {product.price} <br />
            </h3>
        } else {
            return <h3>
                Sản phẩm đã hết
            </h3>
        }
    }
    render() {
        let product = {
            id: 1,
            name: 'A70',
            price: 10000000,
            status: true,
        }
        let users = [
            {
                id : 1,
                name : "nguyễn minh hải",
                age: 22
            },
            {
                id : 2,
                name : "nguyễn tiến cường",
                age: 56
            },
            {
                id : 3,
                name : "nguyễn ngọc phương thuỳ",
                age: 12
            }
        ];

        let element = users.map((user, index) => {
            return <div key={user.id}>
                <h2>Tên: {user.name}</h2>
                <p>Tuổi: {user.age}</p>
            </div>
        });

        return (
            <div>
                {this.showProduct(product)}
                <br/>
                <br/>
                {element}
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Product />
                    </div>
                </div>

            </div>
        );
    }
}

export default Demo;
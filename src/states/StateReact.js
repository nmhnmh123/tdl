import React, { Component } from 'react';
import Product from '../props/Product'

class StateReact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "A70",
                    price: "9000000 VNĐ",
                    image: "https://didongviet.vn/pub/media/catalog/product//d/i/dien-thoai-samsung-galaxy-a70-xanh-didongviet_4_1.jpg",
                    status: true
                },
                {
                    id: 2,
                    name: "IPX",
                    price: "19000000 VNĐ",
                    image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
                    status: true
                },

                {
                    id: 3,
                    name: "A71",
                    price: "7000000 VNĐ",
                    image: "https://product.hstatic.net/1000370939/product/samsung-galaxy-a71-selver-400x460-400x460_6b19e148ef494b95b88a0f12d0053b27.png",
                    status: false
                },

                {
                    id: 4,
                    name: "IPAD MINI",
                    price: "12000000 VNĐ",
                    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-201911_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&op_usm=0.5%2C0.5&.v=1573825332486",
                    status: true
                }
            ],
            isActive: 'Active',
            gender: [
                {
                    id: 0,
                    gd: "Nam",
                },
                {
                    id: 1,
                    gd: "Nữ",
                },
                {
                    id: 3,
                    gd: "Gay",
                }
            ],
            isGender: 0
        }
    }

    btnActive = () => {
        if (this.state.isActive === 'Active') {
            this.setState({ isActive: 'Inactive' });
        } else {
            this.setState({ isActive: 'Active' });
        }
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {

        let elementProduct = this.state.products.map((product, index) => {
            let result;
            if (product.status && this.state.isActive === 'Active') {
                result = <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                        <span className="label label-success">{product.price}</span>
                    </td>
                </tr>
            }
            return result;
        });

        let elementGender = this.state.gender.map((gender, index) => {
            let result;
            return <select name="isGender"
                className="form-control"
                value={this.state.isGender}
                onChange={this.onHandleChange}
            >
                <option value={gender.id}>{gender.gd}</option>
            </select>

        });

        let test = <select
            name="isGender"
            className="form-control"
            value={this.state.isGender}
            onChange={this.onHandleChange}
        >
            {this.state.gender.map((gd,index) => <option key={gd.id} value={gd.id}>{gd.gd}</option>)}
        </select>


        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">State</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="row">

                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {test}
                                </tbody>
                            </table>

                            <button type="button" className="btn btn-primary" onClick={this.btnActive}>{this.state.isActive}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StateReact;
import React, { Component } from 'react';
import Product from './Product'

class Props extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
            isOpen: false,
        }
    }

    onAddProduct = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    testFunction = (event) => {
        this.setState({
            textInput: event.target.value,
        });
    }

    render() {
        let products = [
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
                status: true
            },

            {
                id: 4,
                name: "IPAD MINI",
                price: "12000000 VNĐ",
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-201911_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&op_usm=0.5%2C0.5&.v=1573825332486",
                status: true
            }
        ];

        let elementProduct = products.map((product, index) => {
            let result = '';
            if (product.status) {
                result = <Product key={index}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            }
            return result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Props</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Thêm sản phẩm</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <label>Tên sản phẩm</label>
                                            <input type="text" className="form-control" onChange={(this.testFunction)}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Save</button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {this.state.isOpen ? elementProduct : ''}

                                {/* <Product 
                                    name="A70" 
                                    price="9000000 VNĐ"
                                    image="https://didongviet.vn/pub/media/catalog/product//d/i/dien-thoai-samsung-galaxy-a70-xanh-didongviet_4_1.jpg"
                                />
                                <Product 
                                    name="IPX" 
                                    price="19000000 VNĐ"
                                    image="https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg"
                                />
                                <Product 
                                    name="A71" 
                                    price="7000000 VNĐ"
                                    image="https://product.hstatic.net/1000370939/product/samsung-galaxy-a71-selver-400x460-400x460_6b19e148ef494b95b88a0f12d0053b27.png"
                                />
                                <Product 
                                    name="IPAD MINI" 
                                    price="12000000 VNĐ"
                                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-201911_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&op_usm=0.5%2C0.5&.v=1573825332486"
                                /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Props;
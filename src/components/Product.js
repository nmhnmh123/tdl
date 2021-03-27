import React, { Component } from 'react';


class Product extends Component {
    render() {
        let price = 10000000;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img alt="Samsung A70" src="https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/600_a70_black_800x800_min.jpg"></img>
                    <div className="caption">
                        <h3>Samsung A70</h3>
                        <p>
                            {price} VNĐ
                        </p>
                        <div>
                            {/* <a href="#" className="btn btn-primary">Xem chi tiết</a>
                            <a href="#" className="btn btn-primary">Mua hàng</a> */}
                            <button type="button" className="btn btn-info">Xem chi tiết</button>
                            <button type="button" className="btn btn-success">Mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
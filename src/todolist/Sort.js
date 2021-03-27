import React, { Component } from 'react';
import '../App.css'

class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort : {
                by: 'name',
                value: 1
            }
        }
    }
    

    onClick = (sortBy, value) => {
        this.setState({
            sort : {
                by: sortBy,
                value: value,
            }
        });
        this.props.onSort(sortBy, value);
    }

    render() {
        var {by,value} = this.state.sort;
        return (
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="dropdown" >
                    <button
                        class="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                        style={{ backgroundColor: "#1769aa", color: "white" }}
                    >
                        Sắp xếp <i className="fas fa-caret-down ml-5"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name',1)}>
                            <a role="button">
                                <i className="fas fa-sort-alpha-down pr-5"></i>
                                                        Tên A-Z
                                {(by==='name' && value===1) ? <i class="fas fa-check ml-20"></i> : ''}
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name',-1)}>
                            <a role="button">
                                <i className="fas fa-sort-alpha-down-alt pr-5"></i>
                                                        Tên Z-A
                                {(by==='name' && value===-1) ? <i class="fas fa-check ml-20"></i> : ''}
                            </a>
                        </li>
                        <li role="separator" class="divider"></li>
                        <li onClick={() => this.onClick('status',1)}>
                            <a role="button">Trạng thái kích hoạt{(by==='status' && value===1) ? <i class="fas fa-check ml-20"></i> : ''}</a>
                            
                        </li>
                        <li onClick={() => this.onClick('status',-1)}>
                            <a role="button">Trạng thái ẩn{(by==='status' && value===-1) ? <i class="fas fa-check ml-20"></i> : ''}</a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;
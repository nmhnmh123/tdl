import React, { Component } from 'react';
import '../App.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
         this.props.onSearch(this.state.keyword);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        name='keyword'
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khoá..."
                        value = {this.state.keyword}
                        onChange = {this.onChange}
                    />
                    <span className="input-group-btn" >
                        <button 
                        type="button" 
                        className="btn btn-primary" 
                        style={{ marginTop: -9.5, marginLeft: -20 }}
                        onClick={this.onSearch}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
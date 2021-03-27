import React, { Component } from 'react';
import '../App.css'
import Search from './Search'
import Sort from './Sort'

class Control extends Component {
    render() {
        return (
            <div className="row">
                {/*Search*/}
                <Search 
                    onSearch = {this.props.onSearch}
                    />
                {/*Sort*/}
                <Sort onSort = {this.props.onSort}/>
            </div>
        );
    }
}

export default Control;
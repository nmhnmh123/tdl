import React, { Component } from 'react';
import '../App.css'

class NotFound extends Component {
    render() {
        var {match} = this.props;
        var slug = match.params.slug;

        return (    
            <div>
                <h1>SLUG: {slug} </h1>
            </div>
        );
    }
}

export default NotFound;
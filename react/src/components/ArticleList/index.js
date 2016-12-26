import React, { Component } from 'react';

class ArticleList extends Component {

    render() {
        console.log( this.props );
        return (
            <ul>
            {
                this.props.items.map( function( item ) {
                    return <li key={item._id}>{item.title}</li>;
                } )
            }
            </ul>
        );
    } 

}

module.exports = ArticleList;

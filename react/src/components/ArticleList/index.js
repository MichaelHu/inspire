import React, { Component } from 'react';

var ArticleList = React.createClass( {

    getInitialState: function() {
        return { items: [] };
    }

    , render: function() {
        return (
            <ul>
            {
                this.state.items.map( function( item) {
                    return <li>{item.title}</li>;
                } )
            }
            </ul>
        );
    } 

} );

module.exports = ArticleList;

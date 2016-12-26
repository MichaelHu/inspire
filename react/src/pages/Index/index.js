import React, { Component } from 'react';
import Hello from '../../components/Hello';
import ArticleList from '../../components/ArticleList';
import $ from 'jquery';

var IndexPage = React.createClass( {

    getInitialState: function() {
        return { articles: [] };
    }

    , render: function() {
        return (
            <div>
                <Hello name="inspire" />
                <ArticleList items={this.state.articles} />
            </div>
        );
    } 
    
    , componentWillMount: function() {
        console.log( 'componentWillMount' );
    }

    , componentDidMount: function() {
        console.log( 'componentDidMount' );
        $.ajax( 
            '/notes/1/10' 
            , {
                success: ( data, textStatus, jqXHR ) => {
                    this.setState( { articles: eval( data ) } );
                }
            }
        );
    }

    , componentWillReceiveProps: function( nextProps) {
        console.log( 'componentWillReceiveProps', nextProps );
    }

    , shouldComponentUpdate: function() {
        console.log( 'shouldComponentUpdate' );
        return true;
    }

    , componentWillUpdate: function() {
        console.log( 'componentWillUpdate' );
    }

    , componentDidUpdate: function() {
        console.log( 'componentDidUpdate' );
    }

    , componentWillUnmount: function() {
        console.log( 'componentWillUnmount' );
    }

} );

module.exports = IndexPage;


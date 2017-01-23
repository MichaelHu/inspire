import React, { Component } from 'react';
import styles from './index.scss';
import Button from 'react-bootstrap/lib/Button';
import { browserHistory as history } from 'react-router';

class ArticleListItem extends Component {

    constructor( props ) {
        super( props );
        this.onclick = this.onclick.bind( this );
    }

    render() {
        let item = this.props.item;
        let me = this;

        return (
            <dd className={ styles.item }>
                <Button bsStyle="info" onClick={me.onclick} 
                    data-articleID={item.note_id}>{item.title}</Button>
            </dd>
        );
    }

    onclick() {
        // location.href = '/article';
        history.push( '/article/' + this.props.item.note_id );
    }

}


class ArticleList extends Component {

    render() {
        let me = this;
        return (
            <dl>
            {
                this.props.items.map( function( item ) {
                    return <ArticleListItem key={item._id} item={item} /> 
                } )
            }
            </dl>
        );
    } 

}

module.exports = ArticleList;

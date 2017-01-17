import React, { Component } from 'react';
import styles from './index.scss';
import Button from 'react-bootstrap/lib/Button';

class ArticleList extends Component {

    render() {
        let me = this;
        return (
            <dl>
            {
                this.props.items.map( function( item ) {
                    return (
                        <dd key={item._id} className={ styles.item }>
                            <Button bsStyle="info" onClick={me.onclick}>{item.title}</Button>
                        </dd>
                    );
                } )
            }
            </dl>
        );
    } 

    onclick() {
        location.href = '/article';
    }

}

module.exports = ArticleList;

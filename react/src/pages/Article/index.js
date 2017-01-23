import React, { Component } from 'react';
import $ from 'jquery';

class ArticleInfo extends Component {

    render () {
        var noteInfo = this.props.noteInfo;
        return (
            <div>
                <h2>{noteInfo.title || '默认标题'}</h2>
                <span>{noteInfo.file_name || '空路径'}</span>
            </div>
        );
    }

}

var ArticlePage = React.createClass( {

    getInitialState: function() {
        return {
            noteInfo: {}
            , noteLines: []
        };
    }

    , render: function() {
        return (
            <div>
                <ArticleInfo noteInfo={this.state.noteInfo} />
            </div>
        );
    }

    , componentDidMount: function() {
        let { article_id: articleID } = this.props.params;

        $.ajax( 
            '/note/' + articleID
            , {
                success: ( data, textStatus, jqXHR ) => {
                    let noteData = eval( data );
                    if ( noteData.length < 2 ) {
                        return; 
                    }
                    let [ noteInfo, noteLines ] = noteData;
                    this.setState( { noteInfo, noteLines } );
                }
            }
        );
    }

} );

module.exports = ArticlePage;

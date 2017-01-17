import React from 'react';
import { render } from 'react-dom';
import IndexPage from './pages/Index';
import ArticlePage from './pages/Article';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

render(
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={IndexPage} />
            <Route path="article" component={ArticlePage} />
        </Route>
    </Router>
    , document.getElementById( 'wrapper' )
);

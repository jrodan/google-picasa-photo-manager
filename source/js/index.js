import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import App from './App.js';
import AlbumList from './components/AlbumList';
import AlbumUpload from './components/AlbumUpload';


ReactDOM.render(
    <Router history={browserHistory}>
        
        <Route path="/" component={App}>
            <Route path="list-albums" component={AlbumList} />
            <Route path="add-albums" component={AlbumUpload} />
        </Route>

    </Router>
    , document.getElementById('root')
);

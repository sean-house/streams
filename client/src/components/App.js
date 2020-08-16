import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';



const App = () => {
    return (
    <div>
        <BrowserRouter>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/show' component={StreamShow} />
            <Route path='/streams/new' component={StreamCreate} />
            <Route path='/streams/edit' component={StreamEdit} />
            <Route path='/streams/delete' component={StreamDelete} />
        </BrowserRouter>
    </div>
    );
};

export default App;
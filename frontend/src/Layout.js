import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'

import Home from './Pages/Home/Home'
import PostCreate from './Pages/PostCreate/PostCreate'
import PostDetailsView from './Pages/PostDetailsView/PostDetailsView'

const Layout = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/create-post" component={PostCreate} />
                <Route exact path="/post/:id" component={PostDetailsView} />
            </Switch>
        </Router>
    )
}

export default Layout
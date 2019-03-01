import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './component/Auth/Auth'
import Dashboard from './component/Dashboard/Dashboard'
import Post from './component/Post/Post';
import Form from './component/Form/Form';

export default (
    <Switch>
      <Route component={ Auth } exact path="/" />
      <Route component={ Dashboard } exact path="/dashboard" />
      <Route component={ Post } exact path="/post/:postid" />
      <Route component={ Form } exact path="/new" />
    </Switch>
  )
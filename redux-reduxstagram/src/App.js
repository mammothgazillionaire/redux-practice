import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import Main from "../src/components/Main";
import Single from "../src/components/Single";
import Photogrid from "../src/components/Photogrid";
import { Router, Route, IndexRoute, browserHistory } from "react-router";


  const router = (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  )
  render(router, document.getElementById('app')); 


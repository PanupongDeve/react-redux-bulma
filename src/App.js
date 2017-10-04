import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';


import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
const DashBoard = () => <h1>DashBoard</h1>;
const Text = () => <h1>Text</h1>;

class App extends Component {
  
  render() {
    return (     
      <div>
        <Nav />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Header} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route  path="/text" component={Text} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

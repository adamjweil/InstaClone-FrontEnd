import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

class App extends Component {
  constructor(){
    super();
    this.state = {
      photos: [],
      newPhoto: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/photos')
    .then(function(response){
      return response.json();
      })
      .then((obj) => {
        console.log(obj)
        this.setState({photos: obj});
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/" render={ () => <Home photos={this.state.photos} title="Recently Added Photos" /> } />
              <Route path="/profile" render={ () => <Profile photos={this.state.photos} /> } />
              <Route path="/about" render={ () => <About /> } />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

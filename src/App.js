import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

class App extends Component {
  constructor(){
    super();
    this.state = {
      photos: [],
      blurb: "",
      base64: "",
      username: "",
      created_at: "",
      userPhotos: []
    };
    this.newPhotoSubmitHandler = this.newPhotoSubmitHandler.bind(this);
    this.handlePhotoInput = this.handlePhotoInput.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.handleBlurbInput = this.handleBlurbInput.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
  }

  getUserPhotos = () => {
    fetch('http://localhost:3000/adamjweil')
    .then(function(response) {
      return response.json();
    })
    .then((obj) => {
      this.setState({ userPhotos: obj })
    })
  };

  getPhotos = () => {
    fetch('http://localhost:3000/photos')
    .then(function(response){
      return response.json();
      })
      .then((obj) => {
      this.setState({photos: obj});
    })
  };

  componentDidMount() {
    this.getPhotos();
    this.getUserPhotos();
  }

  handlePhotoInput = e => {
    e.preventDefault();
    let that = this;
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file)
      reader.onload = function(event) {
        that.setState({base64: reader.result})
      }
    };
  // handlePhotoInput = e =>
  //   this.setState({ base64: e.target.file });

  handleBlurbInput = e =>
    this.setState({ blurb: e.target.value });
  handleUsernameInput = e =>
    this.setState({ username: e.target.value });
  handleDateInput = e =>
    this.setState({ created_at: e.target.value });

  newPhotoSubmitHandler = e => {
    e.preventDefault();
    let that = this;
    fetch('http://localhost:3000/photos', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        blurb: this.state.blurb,
        base64: this.state.base64,
        username: this.state.username
      })
    })
      .then(function(response){
        return response.json();
      })
      .then((obj) => {
        this.setState({photos: [obj].concat(that.state.photos)})
      })
      .catch(error => console.error("fetch error: ", error))
      this.setState({
        blurb: '',
        base64: '',
        username: ''
      })
      // this.getPhotos();
      this.getUserPhotos();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/" render={ () => <Home
                                                    photos={this.state.photos}
                                                    title="Recently Added Photos"
                                                    NavHeader="Home Page"
                                                    newPhotoSubmitHandler={this.newPhotoSubmitHandler}
                                                    handleBlurbInput={this.handleBlurbInput}
                                                    handlePhotoInput={this.handlePhotoInput}
                                                    handleUsernameInput={this.handleUsernameInput}
                                                    handleDateInput={this.handleDateInput}
                                                    base64={this.state.base64}
                                                    blurb={this.state.blurb}
                                                    username={this.state.username}
                                                    created_at={this.state.created_at} /> } />
              <Route path="/profile" render={ () => <Profile
                                                    photos={this.state.userPhotos}
                                                    title="Timeline"
                                                    getUserPhotos={this.getUserPhotos}
                                                    userPhotos={this.state.userPhotos}
                                                    newPhotoSubmitHandler={this.newPhotoSubmitHandler}
                                                    handleBlurbInput={this.handleBlurbInput}
                                                    handlePhotoInput={this.handlePhotoInput}
                                                    handleUsernameInput={this.handleUsernameInput}
                                                    handleDateInput={this.handleDateInput}
                                                    base64={this.state.base64}
                                                    blurb={this.state.blurb}
                                                    username={this.state.username}
                                                    created_at={this.state.created_at} /> } />
              <Route path="/about" render={ () => <About /> } />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

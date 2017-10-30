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
      photos:  [
        {
          photo_url: "https://media.cntraveler.com/photos/590372b6a71e701c036ce19c/master/pass/best-mexico-beaches-playa-de-amor-GettyImages-648939118.jpg",
          blurb: "#blessed!",
          username: "@JessFTW",
          created_at: "2017-10-22"
        },
        {
          photo_url: "https://media.gq.com/photos/594ee1bf92ae3c70e00797af/master/w_800/best-beaches-Railay-Beach-Thailand.jpg",
          blurb: "Beach Day!",
          username: "@BeachMaster",
          created_at: "2017-10-25"
        },
        {
          photo_url: "https://s-i.huffpost.com/gen/4451422/images/o-FOOD-facebook.jpg",
          blurb: "Lunch!",
          username: "@Foodie",
          created_at: "2017-08-28"
        },
        {
          photo_url: "http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/07/20/32/food-paradise-102-ss-001.rend.hgtvcom.966.544.suffix/1491584380240.jpeg",
          blurb: "Footlongs all Day!!",
          username: "@BeachMaster",
          created_at: "2017-10-24"
        },
        {
          photo_url: "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/18/0/YW0304H_Pulled-Pork-Sandwich_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387299384530.jpeg",
          blurb: "Sliderssss",
          username: "@Foodie",
          created_at: "2017-09-14"
        },
        {
          photo_url: "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi",
          blurb: "Who",
          username: "@ILoveFood",
          created_at: "2017-10-02"
        },
        {
          photo_url: "https://user-images.githubusercontent.com/25589910/31578714-0619e110-b0f5-11e7-9433-30530184c16a.png",
          blurb: "Main page, Dashboard, and Bitcoin pages of Coin'Stache. An application I built in React Native. See https://github.com/adamjweil/CoinStash for more info...",
          username: "@AdamJWeil",
          created_at: "2017-10-22"
        },

        {
          photo_url: "https://image.slidesharecdn.com/codingsuperpowersupershort-140924145900-phpapp02/95/coding-superpower-1-638.jpg?cb=1411571210",
          blurb: "Code!!!",
          username: "@AdamJWeil",
          created_at: "2017-10-20"
        },
        {
          photo_url: "https://user-images.githubusercontent.com/25589910/31578878-29edabdc-b0f8-11e7-9dc8-dfbae7f8ff7e.png",
          blurb: "Bitcoin New Feed, Wallet, and Transaction Detail pages of Coin'Stache App. See https://github.com/adamjweil/CoinStash for more info...",
          username: "@AdamJWeil",
          created_at: "2017-10-22"
        },
        {
          photo_url: "https://mdn.mozillademos.org/files/9461/css-declaration-small.png",
          blurb: "Can't get enough CSS!",
          username: "@AdamJWeil",
          created_at: "2017-10-18"
        },
        {
          photo_url: "https://i.ytimg.com/vi/mkualZPRZCs/maxresdefault.jpg",
          blurb: "Loving React Native! Please reach out if you'd like to discuss or collaborate on any projects!",
          username: "@AdamJWeil",
          created_at: "2017-10-27"
        },
        {
          photo_url: "https://i.ytimg.com/vi/Nf_Si8_szmM/maxresdefault.jpg",
          blurb: "Nothing better than Ruby on Rails to learn and develop your coding skills to take the next level!!! Great framework, highly recomend!",
          username: "@AdamJWeil",
          created_at: "2017-10-24"
        },
        {
          photo_url: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/55/8x/p0558xqm.jpg",
          blurb: "Having Fun!",
          username: "@AdamJWeil",
          created_at: "2017-9-22"
        },
        {
          photo_url: "http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/12/3/top-10-caribbean-beaches-eagle-beach-aruba.jpg.rend.hgtvcom.966.725.suffix/1491584555480.jpeg",
          blurb: "Wow!",
          username: "@AdamJWeil",
          created_at: "2017-10-21"
        },
        {
          photo_url: "https://wallpaperclicker.com/storage/wallpaper/cool-Cat-with-glass-wallpapers-hd-31094206.jpg",
          blurb: "Like the shades..",
          username: "@AdamJWeil",
          created_at: "2017-10-22"
        },
      ],
      blurb: "",
      base64: "",
      username: "",
      created_at: "",
      profileInfo: {
        photoUrl: "https://avatars3.githubusercontent.com/u/25589910?v=4&s=400",
        bio: "Hi, my name is Adam Weil! This is a small project I worked on to get more familiarized with React and Paperclip!"
      },
    };
    this.newPhotoSubmitHandler = this.newPhotoSubmitHandler.bind(this);
    this.handlePhotoInput = this.handlePhotoInput.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.handleBlurbInput = this.handleBlurbInput.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleStaticUsernameInput = this.handleStaticUsernameInput.bind(this);
    this.handleAvatarInput = this.handleAvatarInput.bind(this);
    // this.showTechDetails = this.showTechDetails.bind(this);
  }



  getUserPhotos = () => {
    fetch('https://localhost:3000/adamjweil')
    .then(function(response) {
      // return response.json();
    })
    .then((obj) => {
      this.setState({ userPhotos: [obj].concat(this.state.photos) })
    })
  };

  getPhotos = () => {
    fetch('https://localhost:3000/photos')
    .then(function(response){
      return response.json();
      })
      .then((obj) => {
      this.setState({
        photos: [
          obj
        ],
        ...this.state.guests
      });
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

  handleBlurbInput = e =>
    this.setState({ blurb: e.target.value });
  handleUsernameInput = e =>
    this.setState({ username: e.target.value });
  handleStaticUsernameInput = e =>
    this.setState({ username: "@AdamJWeil" });
  handleDateInput = e =>
    this.setState({ created_at: e.target.value });
  handleAvatarInput = e => {
    e.preventDefault();
    let that = this;
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file)
      reader.onload = function(event) {
        that.setState({
          profileInfo: {
          photoUrl: reader.result,
          bio: that.state.profileInfo.bio
          }
      })
    }
  };
  newAvatarSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      profileInfo: {
        photoUrl: this.state.profileInfo.photoUrl,
        bio: this.state.profileInfo.bio
      }
    })
  };


  newUserPhotoSubmitHandler = e => {
    e.preventDefault();
    let that = this;
    this.setState({
      photos: [
        {
          photo_url: this.state.base64,
          username: "@AdamJWeil",
          blurb: this.state.blurb,
          created_at: "2017-10-27"
        },
        ...this.state.photos
      ]
    });
  }
  newPhotoSubmitHandler = e => {
    e.preventDefault();
    let that = this;
    this.setState({
      photos: [
        {
        photo_url: this.state.base64,
        username: this.state.username,
        blurb: this.state.blurb,
        created_at: "2017-10-27"
      },
      ...this.state.photos
    ],
  })
    fetch('https://localhost:3000/photos', {
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
        console.log(obj)
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
                                                    userField="True"
                                                    created_at={this.state.created_at} /> } />
              <Route path="/profile" render={ () => <Profile
                                                    photos={this.state.photos}
                                                    profileInfo={this.state.profileInfo}
                                                    handleAvatarInput={this.handleAvatarInput}
                                                    newAvatarSubmitHandler={this.newAvatarSubmitHandler}
                                                    title="Timeline"
                                                    getUserPhotos={this.getUserPhotos}
                                                    userPhotos={this.state.userPhotos}
                                                    newPhotoSubmitHandler={this.newUserPhotoSubmitHandler}
                                                    handleBlurbInput={this.handleBlurbInput}
                                                    handlePhotoInput={this.handlePhotoInput}
                                                    handleUsernameInput={this.handleUsernameInput}
                                                    handleStaticUsernameInput={this.handleStaticUsernameInput}
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

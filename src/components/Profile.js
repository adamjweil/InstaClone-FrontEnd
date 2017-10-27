import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import Photos from './Photos';

class Profile extends Component {

  render() {

    const profileInfo = {
      photoUrl: "https://avatars3.githubusercontent.com/u/25589910?v=4&s=400",
      bio: "Hi, my name is Adam Weil! This is a small project I worked on to get more familiarized with React and Paperclip!"
    }

    return (
      <div className="main-content home">
        <h2>Profile</h2>
        <ProfileInfo profileInfo={profileInfo} />
        <div>
        <Photos photos={this.props.photos} title="Timeline" />
        </div>
      </div>
    );
  }
}

export default Profile;

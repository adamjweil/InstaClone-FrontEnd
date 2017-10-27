import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import Photos from './Photos';
import NewPhotoForm from './NewPhotoForm';

class Profile extends Component {

  render() {

    const profileInfo = {
      photoUrl: "https://avatars3.githubusercontent.com/u/25589910?v=4&s=400",
      bio: "Hi, my name is Adam Weil! This is a small project I worked on to get more familiarized with React and Paperclip!"
    }

    return (
      <div className="main-content home">
        <ProfileInfo profileInfo={profileInfo} />
        <NewPhotoForm
          newPhotoSubmitHandler={this.props.newPhotoSubmitHandler}
          handlePhotoInput={this.props.handlePhotoInput}
          handleBlurbInput={this.props.handleBlurbInput}
          handleUsernameInput={this.props.handleUsernameInput}
          handleDateInput={this.props.handleDateInput}
          base64={this.props.base64}
          blurb={this.props.blurb}
          username={this.props.username}
          created_at={this.props.created_at} />
        <div>
        <Photos photos={this.props.photos} title="Timeline" />
        </div>
      </div>
    );
  }
}

export default Profile;

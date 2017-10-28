import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import Photos from './Photos';
import NewPhotoForm from './NewPhotoForm';
import UserPhotos from './UserPhotos';

class Profile extends Component {
  componentDidMount() {
    this.props.getUserPhotos
  }
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
          handlePhotoInput={this.props.handlePhotoInput.bind(this)}
          handleBlurbInput={this.props.handleBlurbInput.bind(this)}
          handleUsernameInput={this.props.handleUsernameInput.bind(this)}
          handleStaticUsernameInput={this.props.handleStaticUsernameInput.bind(this)}
          handleDateInput={this.props.handleDateInput.bind(this)}
          base64={this.props.base64}
          blurb={this.props.blurb}
          username={this.props.username}
          userField={this.props.userField}
          created_at={this.props.created_at} />
        <div>
        <UserPhotos photos={this.props.photos} title="Timeline" />
        </div>
      </div>
    );
  }
}

export default Profile;

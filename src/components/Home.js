import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Photos from './Photos';
import NewPhotoForm from './NewPhotoForm';

class Home extends Component {

  render() {
    return (
      <div className="main-content home">
        <Photos photos={this.props.photos} title={this.props.title} />
        <NewPhotoForm
          newPhotoSubmitHandler={this.props.newPhotoSubmitHandler}
          handlePhotoInput={this.props.handlePhotoInput}
          handleBlurbInput={this.props.handleBlurbInput}
          handleUsernameInput={this.props.handleUsernameInput}
          handleDateInput={this.props.handleDateInput}
          base64={this.props.base64}
          blurb={this.props.blurb}
          username={this.props.username}
          userField={this.props.userField}
          created_at={this.props.created_at} />
      </div>
    );
  }
}

export default Home;

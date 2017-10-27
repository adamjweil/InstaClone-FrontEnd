import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileInfo extends Component {

  render() {
    const { photoUrl, bio } = this.props.profileInfo

    return (
      <div className="profile-info">
        <div className="profile-header">
          <div className="avatarColumn">
            <img className="avatar" src={photoUrl} alt=""/>
            <h2>@AdamJWeil</h2>
          </div>
          <div className="avatarColumn">
              <div className="bio">
                {bio}
              </div>
          </div>
        </div>
        <section id="follow-details">
        </section>
      </div>
    );
  }
}

export default ProfileInfo;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NewPhotoForm extends Component {
  render() {
  const now = Date.now();

    return (
      <section className="new-photo-form">
        <p id="new-photo-form">Post a Photo</p>
          <form onSubmit={this.props.newPhotoSubmitHandler} >
            <input
              type="file"
              onChange={this.props.handlePhotoInput}
              placeholder=""
              value="" />
             <textarea
               className="blurbInput"
               value={this.props.blurb}
               onChange={this.props.handleBlurbInput}
               placeholder="Enter Photo Description"
               />

             <img className="photoPlaceholder" src={this.props.base64} />
             <div className="usernameInput">
                {this.props.userField
                  ?
                <input
                  type="text"
                  onChange={this.props.handleUsernameInput}
                  value={this.props.username}
                  placeholder="Username" />
                  : null
                }
               </div>
            <input
              type="hidden"
              value={now} />
            <button type="submit" name="submit" value="submit">SUBMIT</button>
        </form>

      </section>
    );
  }
}

export default NewPhotoForm;

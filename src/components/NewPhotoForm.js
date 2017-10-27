import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Img from 'react-image';

class NewPhotoForm extends Component {
  render() {
    const now = Date.now();
    return (
      <section id="new-photo-form">
        <p id="new-photo-form">Post a Photo</p>
        <form onSubmit={this.props.newPhotoSubmitHandler} >
          <input
            type="file"
            onChange={this.props.handlePhotoInput} />
          <input
            type="textarea"
            onChange={this.props.handleBlurbInput}
            value={this.props.blurb}
            placeholder="Description" />
          <input
            type="text"
            onChange={this.props.handleUsernameInput}
            value={this.props.username}
            placeholder="Username" />
          <input
            type="hidden"
            onChange={this.props.handleDateInput}
            value={now} /><br />
          <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default NewPhotoForm;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'muicss/lib/react/button';
// import Img from 'react-image';
// import { Button, IconButton, HamburgerButton, FloatingButton, FlatButton } from 'react-buttons';
// import PureRenderMixin from 'react-addons-pure-render-mixin';
// import { Button, IconButton, HamburgerButton, FloatingButton, FlatButton } from 'react-buttons';
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
            value={now} />

          <button type="submit" name="submit" value="submit">SUBMIT</button>

        </form>

      </section>
    );
  }
}

export default NewPhotoForm;

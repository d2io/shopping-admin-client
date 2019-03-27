/**
 * Author: DuongHan
 * Created: 3/25/19
 *
 */

import React from 'react';
import ImageUploader from 'react-images-upload';
import { MDBBtn } from 'mdbreact';
import axios from 'axios';

class PicturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
  }

  onDrop = picture => {
    this.setState(prevState => ({
      pictures: prevState.pictures.concat(picture),
    }));
  };

  uploadImages = () => {
    const data = new FormData();
    const acceptedFiles = this.state.pictures.slice();

    acceptedFiles.map(file => {
      data.append('file', file);
    });

    axios
      .post('/uploadMultiple', data)
      .then(res => console.log(res.data))
      .catch(err => console.log(JSON.stringify(err)));
  };

  render() {
    return (
      <div>
        <ImageUploader
          withIcon
          withPreview
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />

        <MDBBtn onClick={this.uploadImages}>Upload</MDBBtn>
      </div>
    );
  }
}

export default PicturePage;

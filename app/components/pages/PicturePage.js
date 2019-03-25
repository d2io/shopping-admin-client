/**
 * Author: DuongHan
 * Created: 3/25/19
 *
 */

import React from 'react';
import ImageUploader from 'react-images-upload';

class PicturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (
      <ImageUploader
        withIcon
        withPreview
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
      />
    );
  }
}

export default PicturePage;

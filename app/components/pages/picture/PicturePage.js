/**
 * Author: DuongHan
 * Created: 3/25/19
 *
 */

import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdbreact';
import axios from 'axios/index';
import { FormattedMessage } from 'react-intl';
import messages from '../../messages';
import PictureInfo from './PictureInfo';
import Dropzone from './Dropzone';

class PicturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgList: [] };
  }

  uploadImages = () => {
    const data = new FormData();
    const acceptedFiles = this.state.imgList.slice();

    acceptedFiles.map(file => {
      data.append('file', file);
    });

    axios
      .post('/uploadMultiple', data)
      .then(res => console.log(res.data))
      .catch(err => console.log(JSON.stringify(err)));
  };

  onFilesAdded = files => {
    console.log(files);
    files.map(file => console.log(file.name));
    files.map(file => console.log(file.lastModified));
    this.setState({
      imgList: files,
    });
  };

  onRemove = name => {
    const newImgList = this.state.imgList
      .slice()
      .filter(img => img.name !== name);

    this.setState({
      imgList: newImgList,
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow center>
          <MDBCol>
            <p className="h5 text-center mb-4">
              <FormattedMessage {...messages.uploadImg} />
            </p>

            <select className="browser-default custom-select">
              <option>Chọn nhóm hình ảnh</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>

            {this.state.imgList.map(img => (
              <PictureInfo
                className="m-5"
                key={img.lastModified}
                imgSrc={URL.createObjectURL(img)}
                title={img.name}
                alt={`${img.lastModified}_${img.name}`}
                link={`${img.lastModified}_${img.name}`}
                summary={`${img.lastModified}_${img.name}`}
                onRemove={this.onRemove}
              />
            ))}

            <div className="text-center">
              {this.state.imgList.length === 0 && (
                <Dropzone onFilesAdded={this.onFilesAdded} className="my-5" />
              )}

              <MDBBtn outline color="secondary" onClick={this.uploadImages}>
                <FormattedMessage {...messages.upload} />
                <MDBIcon icon="upload" className="ml-1" />
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default PicturePage;

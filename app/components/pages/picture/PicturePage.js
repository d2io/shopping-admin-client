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
    this.state.imgList.slice().map(img => {
      const imgData = new FormData();

      imgData.append('file', img.file);
      imgData.append('title', img.title);
      imgData.append('alt', img.alt);
      imgData.append('link', img.link);
      imgData.append('summary', img.summary);

      axios
        .post('/picture/add', imgData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(JSON.stringify(err)));
    });
  };

  onFilesAdded = files => {
    const tmpImgList = files.map(file => ({
      file,
      title: file.name,
      alt: `${file.lastModified}_${file.name}`,
      link: `${file.lastModified}_${file.name}`,
      summary: `${file.lastModified}_${file.name}`,
    }));

    this.setState({
      imgList: tmpImgList,
    });
  };

  onRemove = index => {
    const newImgList = this.state.imgList
      .slice()
      .filter((img, i) => i !== index);

    this.setState({
      imgList: newImgList,
    });
  };

  onUpdateImageInfo = (index, newImgInfo) => {
    const newImgList = this.state.imgList
      .slice()
      .map((imgInfo, i) => (i === index ? newImgInfo : imgInfo));

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

            {this.state.imgList.map((img, index) => (
              <PictureInfo
                className="m-5"
                index={index}
                key={img.file.lastModified}
                imgSrc={URL.createObjectURL(img.file)}
                title={img.title}
                alt={img.alt}
                link={img.link}
                summary={img.summary}
                onRemove={this.onRemove}
                updateImageInfo={this.onUpdateImageInfo}
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

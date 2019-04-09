/**
 * Author: DuongHan
 * Created: 4/5/19
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { MDBBtn, MDBCard, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdbreact';

class PictureTypeAddOrUpdate extends React.Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow center>
          <MDBCol md="8">
            <MDBCard className="px-5">
              <form>
                <p className="h5 text-center mb-4">{this.props.title}</p>

                <div className="grey-text">
                  <MDBInput
                    label="Tên loại hình ảnh"
                    icon="font"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="SEO URI"
                    icon="link"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="SEO Title"
                    icon="text-height"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="SEO Description"
                    icon="file-alt"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="SEO Keyword"
                    icon="key"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Nhóm"
                    icon="object-group"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Số hiệu"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Hiển thị"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Ảnh loại hình ảnh"
                    icon="image"
                    group
                    type="file"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Chi tiết loại hình ảnh"
                    icon="tag"
                    group
                    type="text-area"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="primary">
                    Lưu <MDBIcon far icon="save" className="ml-1" />
                  </MDBBtn>

                  <MDBBtn outline color="red">
                    Trở về <MDBIcon icon="ban" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default PictureTypeAddOrUpdate;

PictureTypeAddOrUpdate.propTypes = {
  title: PropTypes.string.isRequired,
};

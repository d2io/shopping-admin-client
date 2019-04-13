/**
 * Author: DuongHan
 * Created: 4/5/19
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { MDBBtn, MDBCard, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdbreact';
import { matchPath } from 'react-router-dom';

class PictureTypeAddOrUpdate extends React.Component {
  constructor(props) {
    super(props);

    const matcher = matchPath(this.props.location.pathname, {
      path: '/picture-type/:action',
      exact: true,
      strict: false,
    });

    this.state = {
      data: this.props.location.state.type,
      isUpdate: matcher.params.action === 'update',
    };
  }

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow center>
          <MDBCol md="8">
            <MDBCard className="p-5">
              <form>
                <p className="h5 text-center mb-4">
                  {this.state.isUpdate
                    ? 'Cập nhật kiểu hình ảnh'
                    : 'Thêm mới kiểu hình ảnh'}
                </p>

                <div className="grey-text">
                  <MDBInput
                    label="Tên loại hình ảnh"
                    icon="font"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.data.name}
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
                    value={this.state.data.seoTitle}
                  />
                  <MDBInput
                    label="SEO Description"
                    icon="file-alt"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.data.seoDescription}
                  />
                  <MDBInput
                    label="SEO Keyword"
                    icon="key"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.data.seoKeyword}
                  />
                  <MDBInput
                    label="Nhóm"
                    icon="object-group"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.data.seoDescription}
                  />
                  <MDBInput
                    label="Số hiệu"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.data.number}
                  />
                  <MDBSwitch checked={this.state.isShow} />
                  <MDBInput
                    label="Hiển thị"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.data.isShow}
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
                    value={this.state.data.detail}
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
  location: PropTypes.object.isRequired,
};

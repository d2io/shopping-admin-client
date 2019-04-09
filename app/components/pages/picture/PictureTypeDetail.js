/**
 * Author: DuongHan
 * Created: 4/4/19
 *
 */

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { MDBBadge, MDBBtn, MDBContainer, MDBIcon, MDBTable, MDBTableBody } from 'mdbreact';

class PictureTypeDetail extends React.Component {
  getActionType = () =>
    new URLSearchParams(this.props.location.search).get('action');

  render() {
    const { type } = this.props.location.state;

    return (
      <MDBContainer>
        <h4>Chi tiết loại hình ảnh</h4>

        <MDBTable>
          <MDBTableBody>
            <tr>
              <td>Tên loại hình ảnh: </td>
              <td>{type.name}</td>
            </tr>

            <tr>
              <td>SEO Uri:</td>
              <td>{type.nameAscii}</td>
            </tr>

            <tr>
              <td>SEO Title:</td>
              <td>{type.seoTitle}</td>
            </tr>

            <tr>
              <td>SEO Description:</td>
              <td>{type.seoDescription}</td>
            </tr>

            <tr>
              <td>SEO Keyword:</td>
              <td>{type.seoKeyword}</td>
            </tr>

            <tr>
              <td>Nhóm:</td>
              <td>{type.parent ? type.parent.id : 0}</td>
            </tr>

            <tr>
              <td>Số hiệu:</td>
              <td>{type.number}</td>
            </tr>

            <tr>
              <td>Hiển thị:</td>
              <td>
                {
                  <MDBBadge pill color="default">
                    {type.isShow ? 'Hiển thị' : 'Không hiển thị'}
                  </MDBBadge>
                }
              </td>
            </tr>

            <tr>
              <td>Ảnh loại hình ảnh:</td>
              <td>Cell</td>
            </tr>

            <tr>
              <td>Chi tiết loại hình ảnh:</td>
              <td>{type.name}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>

        <Fragment>
          <MDBBtn floating gradient="blue">
            Cập nhật <MDBIcon icon="pen" className="ml-1" />
          </MDBBtn>
          <MDBBtn floating gradient="peach">
            Xóa <MDBIcon icon="trash-alt" className="ml-1" />
          </MDBBtn>
        </Fragment>
      </MDBContainer>
    );
  }
}

PictureTypeDetail.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PictureTypeDetail;

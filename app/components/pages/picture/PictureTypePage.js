/**
 * Author: DuongHan
 * Created: 4/2/19
 *
 */
import React from 'react';
import { MDBBadge, MDBCard, MDBCardBody, MDBCol, MDBDataTable, MDBIcon, MDBRow, MDBView } from 'mdbreact';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const dataFields = {
  columns: [
    {
      label: 'ID',
      field: 'id',
      sort: 'asc',
      width: 150,
    },
    {
      label: 'Tên loại hình ảnh',
      field: 'name',
      sort: 'asc',
      width: 270,
    },
    {
      label: 'Số TT',
      field: 'number',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Trạng thái',
      field: 'status',
      sort: 'asc',
      width: 100,
    },
    {
      label: 'Hành động',
      field: 'action',
      width: 150,
    },
  ],
};

const ActionBtn = ({ type }) => (
  <div>
    <Link
      to={{
        pathname: '/picture-type/detail',
        search: '?action=view',
        state: { type },
      }}
    >
      <MDBIcon icon="eye" className="cyan-text mx-1" />
    </Link>

    <Link
      to={{
        pathname: '/picture-type/update',
        search: '?action=update',
        state: { type },
      }}
    >
      <MDBIcon icon="pen" className="green-text mx-1" />
    </Link>

    <Link
      to={{
        pathname: '/picture-type/detail',
        search: '?action=hide',
        state: { type },
      }}
    >
      <MDBIcon icon="eye-slash" className="amber-text mx-1" />
    </Link>

    <Link
      to={{
        pathname: '/picture-type/detail',
        search: '?action=delete',
        state: { type },
      }}
    >
      <MDBIcon icon="trash-alt" className="red-text mx-1" />
    </Link>
  </div>
);

class PictureTypePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.props.onFetchAllType();
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.picTypeList) {
      return {
        data: {
          ...dataFields,
          rows: nextProps.picTypeList.map(pictureType => ({
            id: pictureType.id,
            name: pictureType.name,
            number: pictureType.number,
            status: (
              <MDBBadge pill color="default">
                {pictureType.isShow ? 'Hiển thị' : 'Không hiển thị'}
              </MDBBadge>
            ),
            action: <ActionBtn type={pictureType} />,
          })),
        },
      };
    }
    return null;
  }

  render() {
    return (
      <MDBRow>
        <MDBCol md="12">
          <MDBCard className="mt-5">
            <MDBView className="gradient-card-header blue darken-2">
              <h4 className="h4-responsive text-white">Kiểu hình ảnh</h4>
            </MDBView>

            <MDBCardBody>
              <Link
                to={{
                  pathname: '/picture-type',
                  search: '?action=add',
                }}
              >
                <MDBIcon icon="pen" className="green-text mx-1" />
              </Link>

              <MDBDataTable
                responsive
                striped
                bordered
                small
                data={this.state.data}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

PictureTypePage.propTypes = {
  onFetchAllType: PropTypes.func,
};

ActionBtn.propTypes = {
  type: PropTypes.object.isRequired,
};

export default PictureTypePage;

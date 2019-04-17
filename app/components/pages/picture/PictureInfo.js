/**
 * Author: DuongHan
 * Created: 3/28/19
 *
 */
import PropTypes from 'prop-types';
import React from 'react';
import { MDBBtn, MDBCard, MDBCol, MDBIcon, MDBInput, MDBRow } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import messages from '../../messages';

class PictureInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
      alt: this.props.alt || '',
      link: this.props.link || '',
      summary: this.props.summary || '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    this.props.updateImageInfo(this.props.reducers, {
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <MDBCard className="my-5 p-3">
        <MDBRow center>
          <MDBCol size="4" middle>
            <img
              src={this.props.imgSrc || 'https://i.imgur.com/Fu5Ffo4.jpg'}
              alt={this.state.alt}
              className="img-thumbnail rounded"
              height={200}
            />
          </MDBCol>

          <MDBCol>
            <div className="grey-text">
              <MDBInput
                label="Tiêu đề"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                icon="pencil-alt"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Alt"
                name="alt"
                value={this.state.alt}
                onChange={this.handleChange}
                icon="puzzle-piece"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Đường dẫn"
                name="link"
                value={this.state.link}
                onChange={this.handleChange}
                icon="link"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Thông tin"
                name="summary"
                value={this.state.summary}
                onChange={this.handleChange}
                icon="info-circle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow center>
          <MDBCol size="3">
            <MDBBtn
              color="danger"
              onClick={() => this.props.onRemove(this.props.reducers)}
            >
              <FormattedMessage {...messages.delete} />{' '}
              <MDBIcon icon="trash-alt" className="ml-1" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    );
  }
}

PictureInfo.propTypes = {
  alt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PictureInfo;

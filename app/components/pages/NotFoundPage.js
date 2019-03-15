import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import messages from 'components/messages';
import logo from '../../images/404_logo.png';
import bg from '../../images/404_bg.png';

const NotFoundPage = () => (
  <React.Fragment>
    <div className="full">
      <MDBRow className="bad-gateway-row">
        <MDBCol md="8">
          <img alt="Error 404" className="img-fluid" hieght="20px" src={logo} />
          <h2 className="h2-responsive mt-3 mb-2">
            <FormattedMessage {...messages.notFoundTitle} />
          </h2>
          <h4>
            <FormattedMessage {...messages.notFoundDesc} />
          </h4>
        </MDBCol>
        <MDBCol md="4">
          <img alt="Error 404" className="img-fluid" src={bg} />
        </MDBCol>
      </MDBRow>
    </div>
  </React.Fragment>
);

export default NotFoundPage;

import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBDataTable, MDBRow, MDBView } from 'mdbreact';

import { data } from './dataFake/tableData';

const TablesPage = () => (
  <>
    <MDBRow>
      <MDBCol md="12">
        <MDBCard className="mt-5">
          <MDBView className="gradient-card-header blue darken-2">
            <h4 className="h4-responsive text-white">Basic tables</h4>
          </MDBView>
          <MDBCardBody>
            <h3 className="mt-5 text-left">
              <strong>Basic examples</strong>
            </h3>

            <MDBDataTable responsive striped bordered small data={data} />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </>
);

export default TablesPage;

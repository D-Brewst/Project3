import React from "react";
import {
  MDBCard,
  MDBCardBody,
  // MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
const Halloween = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* <MDBRow className="mt-5 justify-content-center"> */}
      <MDBCol>
        <MDBCard>
          <MDBIcon className="text-center" icon="ghost" />
          <MDBCardBody className="elegant-color white-text rounded-bottom">
            <a href="#!" className="activator waves-effect waves-light mr-4">
              <MDBIcon icon="share-alt" className="white-text" />
            </a>
            <MDBCardTitle>HALLOWEEN</MDBCardTitle>
            <hr className="hr-light" />
            <MDBCardText className="white-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href="#!" className="black-text d-flex justify-content-end">
              <h5 className="white-text">
                GENERATE
                <MDBIcon fab icon="first-order-alt" className="ml-2" />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* // </MDBRow> */}
    </div>
  );
};
export default Halloween;

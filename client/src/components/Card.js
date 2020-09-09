import React from "react";
import Members from "../pages/Members";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBRow className="mt-5 justify-content-center">
      <MDBCol md="4">
        <MDBCard>
          <MDBIcon className="text-center" icon="birthday-cake" />
          <MDBCardBody className="elegant-color white-text rounded-bottom">
            <a href="#!" className="activator waves-effect waves-light mr-4">
              <MDBIcon icon="share-alt" className="white-text" />
            </a>
            <MDBCardTitle>BIRTHDAY</MDBCardTitle>
            <hr className="hr-light" />
            <MDBCardText className="white-text">{text}</MDBCardText>
            <a href="#!" className="black-text d-flex justify-content-end">
              <h5 className="white-text">
                <button onClick={Members}>generate</button>
                <MDBIcon fab icon="first-order-alt" className="ml-2" />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default CardExample;

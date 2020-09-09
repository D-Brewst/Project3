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
const CardExample = ({ card, onClick }) => {
  return (
    <MDBRow className="mt-5 justify-content-center">
      <MDBCol md="4">
        <MDBCard>
          <MDBIcon className="text-center" icon="birthday-cake" />
          <MDBCardBody className="elegant-color white-text rounded-bottom">
            <MDBIcon icon="share-alt" className="white-text" />
            <MDBCardTitle>{card.occasion}</MDBCardTitle>
            <hr className="hr-light" />
            <MDBCardText className="white-text">{card.text}</MDBCardText>
            <h5 className="white-text" onClick={onClick}>
              GENERATE
              <MDBIcon fab icon="first-order-alt" className="ml-2" />
            </h5>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};
export default CardExample;

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
const Christmascard = ({ card, onClick }) => {
  const icons = {
    birthday: { icon: "birthday-cake", color: "" },
    Christmas: { icon: "candy-cane", color: "" },
    Halloween: { icon: "candy-cane", color: "" },
    Hannukah: { icon: "candy-cane", color: "" },
  };

  return (
    <MDBRow className="mt-5 justify-content-center">
      <MDBCol md="4">
        <MDBCard>
          <MDBIcon
            className="text-center"
            icon={
              icons[card.occasion] ? icons[card.occasion].icon : "candy-cane"
            }
          />
          <MDBCardBody className="white-text rounded-bottom elegant-color">
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

Christmascard.defaultProps = {
  card: {
    occasion: "Christmas",
  },
};
export default Christmascard;

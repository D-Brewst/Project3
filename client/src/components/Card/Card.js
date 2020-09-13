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
  const icons = {
    Birthday: { icon: "birthday-cake", color: "" },
    Christmas: { icon: "gift", color: "" },
    Valentine: { icon: "heart", color: "" },
    Hanukkah: { icon: "menorah", color: "" },
  };

  return (
    <MDBCard className="cardCon my-3">
      <MDBIcon
        size="4x"
        className="text-center"
        icon={
          icons[card.occasion] ? icons[card.occasion].icon : "candy-cane"
        }
      />
      <MDBCardBody className="white-text rounded-bottom elegant-color">
        <MDBIcon
          icon="share-alt"
          className="share"
          id="share"
        />
        <MDBCardTitle>{card.occasion}</MDBCardTitle>
        <hr className="hr-light" />
        <MDBCardText className="white-text">{card.text}</MDBCardText>
        <br /> <br />
        <h5 className="white-text" onClick={onClick}>
          GENERATE
              <MDBIcon fab icon="first-order-alt" className="ml-2" />
        </h5>
      </MDBCardBody>
    </MDBCard>
  );
};

// CardExample.defaultProps = {
//   card: {
//     occasion: "birthday",
//   },
// };
export default CardExample;

import React from "react";
import { MDBBtn } from "mdbreact";

const CardButton = (props) => {
  return (
    <MDBBtn
      onClick={() => props.genRandom(props.text)}
      className={`card-btn ${props["data-value"]}`}
      gradient="red"
    >
      {props.text}
    </MDBBtn>
  );
};

export default CardButton;

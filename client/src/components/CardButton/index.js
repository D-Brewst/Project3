import React, { Fragment } from "react";
import { MDBBtn, MDBCol } from "mdbreact";

const CardButton = (props) => {
  return (
    <MDBCol className="justify-content-center col-auto">
      <MDBBtn
        color="elegant"
        onClick={() => props.genRandom(props.text)}
        className={`card-btn ${props["data-value"]}`}
        gradient="red"
      >
        {props.text}
      </MDBBtn>
    </MDBCol>
  );
};

export default CardButton;

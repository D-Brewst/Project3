import React from "react";
import { MDBBtn } from "mdbreact";

const CardButton = (props) => {
  return (
    <div className="">
      <MDBBtn
        onClick={() => props.genRandom(props.text)}
        className={`card-btn ${props["data-value"]}`}
        gradient="red"
      >
        {props.text}
      </MDBBtn>
    </div>
  );
};

export default CardButton;

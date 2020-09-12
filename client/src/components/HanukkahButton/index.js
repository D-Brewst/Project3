import React from "react";
import { MDBBtn } from "mdbreact";

const HanukkahButton = (props) => {
  return (
    <>
      <MDBBtn
        onClick={props.onClick}
        className={`card-btn ${props["data-value"]}`}
        {...props}
        gradient="red"
      >
        Hanukkah
      </MDBBtn>
    </>
  );
};

export default HanukkahButton;

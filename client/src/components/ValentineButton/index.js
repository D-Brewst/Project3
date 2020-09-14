import React from "react";
import { MDBBtn } from "mdbreact";

const ValentineButton = (props) => {
  return (
    <>
      <MDBBtn
        onClick={props.onClick}
        className={`card-btn ${props["data-value"]}`}
        {...props}
        gradient="red"
      >
        Valentine
      </MDBBtn>
    </>
  );
};

export default ValentineButton;

import React from "react";
import { MDBBtn } from "mdbreact";

const ChristamsButton = (props) => {
  return (
    <>
      <MDBBtn
        onClick={props.onClick}
        className={`card-btn ${props["data-value"]}`}
        {...props}
        gradient="red"
      >
        Christams
      </MDBBtn>
    </>
  );
};

export default ChristamsButton;

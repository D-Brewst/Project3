import React from "react";
import { MDBBtn } from "mdbreact";

const HalloweenButton = (props) => {
  return (
    <>
      <MDBBtn
        onClick={props.onClick}
        className={`card-btn ${props["data-value"]}`}
        {...props}
        gradient="red"
      ></MDBBtn>
    </>
  );
};

export default HalloweenButton;

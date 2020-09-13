import React from "react";
import { MDBBtn } from "mdbreact";

const BirthdayButton = (props) => {
  return (
    <>
      <MDBBtn
        onClick={props.onClick}
        className={`card-btn ${props["data-value"]}`}
        {...props}
        gradient="red"
      >
        Birthday
      </MDBBtn>
    </>
  );
};

export default BirthdayButton;

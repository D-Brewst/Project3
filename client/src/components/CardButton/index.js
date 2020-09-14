import React, { Fragment } from "react";
import { MDBBtn, MDBCol } from "mdbreact";

const CardButton = (props) => {
  const Occasions = {
    Birthday: {
      color: "primary",
    },
    Christmas: {
      color: "success",
    },
    Valentine: {
      color: "danger",
    },
    Hanukkah: {
      color: "info",
    },
  };

  return (
    <MDBCol className="justify-content-center col-auto">
      <MDBBtn
        color={Occasions[props.text] ? Occasions[props.text].color : "tree"}
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

import React from "react";
import { MDBBtn } from "mdbreact";

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
    <MDBBtn
      onClick={() => props.genRandom(props.text)}
      className={`card-btn ${props["data-value"]}`}
      gradient="red"
      color= {Occasions[props.text] ? Occasions[props.text].color : "tree"}
      >
      {props.text}
    </MDBBtn>
  );
};

export default CardButton;

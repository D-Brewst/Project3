import React from "react";
import Birthdaycard from "../../components/Birthday";
import Halloweencard from "../../components/Halloween";
import Hannukahcard from "../../components/Hannukah";
import Christmascard from "../../components/Christmas";
import { MDBRow } from "mdbreact";

function Members() {
  return (
    <>
      <MDBRow className="mt-5 justify-content-center">
        <Birthdaycard />
        <Halloweencard />
      </MDBRow>
      <MDBRow className="mt-5 justify-content-center">
        <Hannukahcard />
        <Christmascard />
      </MDBRow>
    </>
  );
}

export default Members;

import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
} from "mdbreact";
import "./style.css";
function Home() {
  return (
    <div>
      <MDBContainer className="mt-5 text-center">
        <MDBRow className="pt-5">
          <MDBCol className="text-black text-center py-5 px-4 mr-5">
            <div>
              <h2 className="h1 header-text">Hello, world!</h2>
              <p className="lead">
                This is a simplee hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typgraphy and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <MDBBtn color="primary">Login</MDBBtn>
              </p>
            </div>
          </MDBCol>
          <MDBCol className="ml-5">
            <MDBJumbotron style={{ padding: 0 }}>
              <MDBCol
                className="text-white text-center py-5 px-4 my-5"
                style={{
                  backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
                }}
              >
                <MDBCol className="py-5">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                    BIG PICTURE
                  </MDBCardTitle>
                  <p className="mx-5 mb-5">BIG PICTURE</p>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Home;

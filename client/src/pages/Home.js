import React from "react";
import Navbar from "../components/Navbar";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

function Home() {
  return (
    <div>
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h2 className="h1 display-3">Hello, world!</h2>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component for
                calling extra attention to featured content or information.
            </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typgraphy and spacing to space content out
                within the larger container.
            </p>
              <p className="lead">
                <MDBBtn color="primary">Learn More</MDBBtn>
              </p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ padding: 0 }}>
              <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                <MDBCol className="py-5">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>

                  <p className="mx-5 mb-5">Lorem ipsum dolor sit Ankit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,

                  <p className="mx-5 mb-5">Lorem ipsum dolor sit Ankit Ankit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,

                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
                  <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View Project</MDBBtn>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Home;

import React from "react";
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import { useHistory } from "react-router-dom";
import "./style.css";
import starlogo from "../../images/color-logo.svg";
import samplecard from "../../images/cardenv_1.svg";

function Home() {
  const history = useHistory();
  const redirect = () => history.push("/signup");
  return (
    <div>
      <MDBContainer className="mt-6 justify-content-center">
        <MDBRow className="pt-5">
          <MDBCol className="text-black py-5 px-4 mr-5">
            <div className="justify-content-center text-center">
              {/* <h2 className="h1 header-text">Hello, world!</h2> */}
              <img
                width="250px"
                className="spinner justify-content-center"
                src={starlogo}
                alt=""
              />
              <p className="lead">
                Never write a card again. Generate a card for any occasion with
                WYLDCARD.
              </p>
              <hr className="my-4" />
              <i className="px-2 fa-lg li-ic">
                <i className="fas fa-heart"></i>
              </i>
              <i className="px-2 fa-lg li-ic">
                <i className="fas fa-birthday-cake"></i>
              </i>
              <i className="px-2 fa-lg li-ic">
                <i className="px-2 fa-lg li-ic" className="fas fa-gift"></i>
              </i>
              <i className="px-2 fa-lg li-ic">
                <i className="fas fa-menorah"></i>{" "}
              </i>
              <br /> <br />
              <p className="lead">
                <MDBBtn color="black" onClick={redirect}>Sign Up</MDBBtn>
              </p>
            </div>
          </MDBCol>
        </MDBRow>

        {/* image box */}
        <MDBRow className="samplecard-div">
          <MDBCol className="samplecard-div text-white text-center py-5 px-4 my-5">
            <img
              width="auto"
              className="justify-content-center"
              src={samplecard}
              alt=""
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* <MDBRow>
        <MDBCol md="4">
          <MDBCard wide cascade>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay="white-slight"
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
                alt="Card cap"
              />
            </MDBView>

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Alice Mayer</strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text">Photographer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText>

              <MDBCol md="12" className="d-flex justify-content-center">
                <a href="!#" className="px-2 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin-in"></MDBIcon>
                </a>

                <a href="!#" className="px-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter"></MDBIcon>
                </a>

                <a href="!#" className="px-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f"></MDBIcon>
                </a>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4">
          <MDBCard narrow>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay="white-slight"
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                alt="food"
              />
            </MDBView>

            <MDBCardBody>
              <h5 className="pink-text">
                <MDBIcon icon="utensils" /> Culinary
              </h5>

              <MDBCardTitle className="font-weight-bold">
                Cheat day inspirations
              </MDBCardTitle>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>

              <MDBBtn color="unique">Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4">
          <MDBCard>
            <MDBCardImage
              hover
              overlay="white-light"
              className="card-img-top"
              src="https://mdbootstrap.com/img/Photos/Others/men.jpg"
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Billy Coleman</strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text">Wev developer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText>

              <MDBCol md="12" className="d-flex justify-content-center">
                <MDBBtn rounded floating color="fb">
                  <MDBIcon size="lg" fab icon="facebook-f"></MDBIcon>
                </MDBBtn>

                <MDBBtn rounded floating color="tw">
                  <MDBIcon size="lg" fab icon="twitter"></MDBIcon>
                </MDBBtn>

                <MDBBtn rounded floating color="dribbble">
                  <MDBIcon size="lg" fab icon="dribbble"></MDBIcon>
                </MDBBtn>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow> */}
    </div>
  );
}
export default Home;

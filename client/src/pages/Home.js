import React from "react";

import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBView } from "mdbreact";

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
      </MDBContainer>

      <MDBContainer>
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

      <MDBRow>
        <MDBCol md='4'>
          <MDBCard wide cascade>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay='white-slight'
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
                alt='Card cap'
              />
            </MDBView>

            <MDBCardBody cascade className='text-center'>
              <MDBCardTitle className='card-title'>
                <strong>Alice Mayer</strong>
              </MDBCardTitle>

              <p className='font-weight-bold blue-text'>Photographer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
              </MDBCardText>

              <MDBCol md='12' className='d-flex justify-content-center'>
                <a href='!#' className='px-2 fa-lg li-ic'>
                  <MDBIcon fab icon='linkedin-in'></MDBIcon>
                </a>

                <a href='!#' className='px-2 fa-lg tw-ic'>
                  <MDBIcon fab icon='twitter'></MDBIcon>
                </a>

                <a href='!#' className='px-2 fa-lg fb-ic'>
                  <MDBIcon fab icon='facebook-f'></MDBIcon>
                </a>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md='4'>
          <MDBCard narrow>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay='white-slight'
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                alt='food'
              />
            </MDBView>

            <MDBCardBody>
              <h5 className='pink-text'>
                <MDBIcon icon='utensils' /> Culinary
            </h5>

              <MDBCardTitle className='font-weight-bold'>
                Cheat day inspirations
            </MDBCardTitle>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>

              <MDBBtn color='unique'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md='4'>
          <MDBCard>
            <MDBCardImage
              hover
              overlay='white-light'
              className='card-img-top'
              src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
              alt='man'
            />

            <MDBCardBody cascade className='text-center'>
              <MDBCardTitle className='card-title'>
                <strong>Billy Coleman</strong>
              </MDBCardTitle>

              <p className='font-weight-bold blue-text'>Wev developer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
              </MDBCardText>

              <MDBCol md='12' className='d-flex justify-content-center'>
                <MDBBtn rounded floating color='fb'>
                  <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
                </MDBBtn>

                <MDBBtn rounded floating color='tw'>
                  <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
                </MDBBtn>

                <MDBBtn rounded floating color='dribbble'>
                  <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
                </MDBBtn>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    )
}
    </div>
  )
}

export default Home;

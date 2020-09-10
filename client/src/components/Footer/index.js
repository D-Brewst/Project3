import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="black-text font-small pt-4 mt-5">
      <MDBContainer fluid className="black-text text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">WYLDCARD</h5>
            <p>New York, New York</p>
          </MDBCol>
          <MDBCol>
            {" "}
            <h4>
              <i class="fas fa-grin-alt"></i>
            </h4>
            <a className="black-text" href="#!">
              Devon Brewster
            </a>
          </MDBCol>
          <MDBCol>
            {" "}
            <h4>
              <i class="fas fa-grin-tongue-wink"></i>
            </h4>
            <a className="black-text" href="#!">
              Melissa Mercado
            </a>
          </MDBCol>
          <MDBCol>
            {" "}
            <h4>
              <i class="fas fa-grin-stars"></i>
            </h4>
            <a className="black-text" href="#!">
              Justin Ramirez
            </a>
          </MDBCol>
          <MDBCol>
            {" "}
            <h4>
              <i class="fas fa-grin-squint"></i>
            </h4>
            <a className="black-text" href="#!">
              Joshua Wilensky
            </a>
          </MDBCol>
          <MDBCol>
            {" "}
            <h4>
              <i class="fas fa-flushed"></i> <br />
            </h4>
            <a className="black-text" href="#!">
              Ankit Bagchi
            </a>
          </MDBCol>
          {/* <MDBCol md="6">
            <h5 className="title">OUR TEAM</h5>
            <ul className="black-text">
              <li className="list-unstyled black-text">
                <a className="black-text" href="#!">
                  Devon Brewster
                </a>
              </li>
              <li className="list-unstyled black-text">
                <a className="black-text" href="#!">
                  Melissa Mercado
                </a>
              </li>
              <li className="list-unstyled black-text">
                <a className="black-text" href="#!">
                  Justin Ramirez
                </a>
              </li>
              <li className="list-unstyled black-text">
                <a className="black-text" href="#!">
                  Joshua Wilensky
                </a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="black-text text-center py-3">
        <MDBContainer fluid>&copy; {new Date().getFullYear()}</MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;

import React, { useState } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const Modal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return (
        <MDBContainer>
          <MDBBtn color="primary" onClick={toggle}>Become a Verified User</MDBBtn>
          <MDBModal isOpen={isShowing} toggle={toggle} size="fluid">
            <MDBModalHeader toggle={toggle}>Customer Verification</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              conseq
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
              <MDBBtn color="primary">Submit</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        );
};

export default Modal;
import React, { useState, useRef } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBInput } from 'mdbreact';

const Modal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    function toggle() {
        setIsShowing(!isShowing);
    }

    return (
        <MDBContainer>
          <MDBBtn color="primary" onClick={toggle}>Become a Verified User</MDBBtn>
          <MDBModal isOpen={isShowing} toggle={toggle} size="fluid">
            <MDBModalHeader toggle={toggle}>Customer Verification</MDBModalHeader>
            <MDBModalBody>
            <MDBRow>
                <MDBCol md="12">
                    <form>
                        <div className="grey-text text-center">
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Your first name</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Your last name</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="email" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Your email</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Your address</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Apt/unit #</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Your city</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Your state</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Your Zip Code</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Your date of birth</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" />
                                <label className="" data-error="wrong" data-success="right" id="" aria-labelledby="">Enter the last 4 digits of your SSN</label>
                            </div>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
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
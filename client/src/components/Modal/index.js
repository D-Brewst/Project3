import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBRow, MDBCol } from 'mdbreact';

const Modal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const history = useHistory();
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const address1Ref = useRef();
    const address2Ref = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipCodeRef = useRef();
    const SSNRef = useRef();
    const dateOfBirthRef = useRef();
    const redirect = () => history.push("/payment");
    
    const makeCustomer = async () => {
        console.log(
          "firstname",
          firstNameRef.current.value,
          "lastname",
          lastNameRef.current.value,
          "EMAIL",
          emailRef.current.value,
          "address1",
          address1Ref.current.value,
          "address2",
          address2Ref.current.value,
          "city",
          cityRef.current.value,
          "state",
          stateRef.current.value,
          "zipcode",
          zipCodeRef.current.value,
          "SSN",
          SSNRef.current.value,
          "DOB",
          dateOfBirthRef.current.value,
        );
        // sign up new user
        const { data } = await axios.post("/auth/customer", {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            postalCode: zipCodeRef.current.value,
            dateOfBirth: dateOfBirthRef.current.value,
            address1: address1Ref.current.value,
            address2: address2Ref.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value,
            ssn: SSNRef.current.value
        });
    
        // redirecting user to the members page
        
    
        console.log(data);
        redirect();
      };
    
      const handleCustomer = (e) => {
        e.preventDefault();
        makeCustomer();
        console.log("checking 123")
      };

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
                    <form onSubmit={handleCustomer}>
                        <p>Enter the following information to begin sending and recieving money with Wyld Card</p>
                        <div className="grey-text text-center">
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" required ref={firstNameRef} />
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Your first name</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" required ref={lastNameRef} />
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Your last name</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="email" className="form-control validate" aria-disabled="false" required ref={emailRef}/>
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Your email</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" required ref={address1Ref} />
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Your address</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" ref={address2Ref} />
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Apt/unit #</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" required ref={cityRef}/>
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Your city</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" required ref={stateRef}/>
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Your state</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" required ref={zipCodeRef} />
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Your Zip Code</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" required ref={dateOfBirthRef} />
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Your date of birth</label>
                            </div>
                            <div className="md-form form-group">
                                <input data-test="input" type="text" className="form-control validate" aria-disabled="false" required ref={SSNRef} />
                                <label className="active" data-error="wrong" data-success="right" id="" aria-labelledby="">Enter the last 4 digits of your SSN</label>
                            </div>
                        </div>
                        <MDBBtn color="primary" type="submit">Submit</MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>
        );
};

export default Modal;
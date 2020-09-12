import React from "react";
import sample from "../../sample.json";
import Table from "../../components/Table/index";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "./sample.css";

function SampleMessages(){
    const birthdayMessages = sample.filter(messages => {
        return messages.occasion.includes("birthday");
      })
    const hanukkahMessages = sample.filter(messages => {
        return messages.occasion.includes("Hanukkah");
    })
    const christmasMessages = sample.filter(messages => {
        return messages.occasion.includes("Christmas");
    })
    return(
            <div id="samples">
                <MDBTable>
                <MDBTableHead>Birthday</MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            {birthdayMessages.map(sample => {
                                return (<Table 
                                key= {sample.id}
                                occasion= {sample.occasion}
                                text= {sample.text}
                                />);
                            }) }
                        </tr>
                    </MDBTableBody>
                </MDBTable>

                <MDBTable>
                <MDBTableHead>Christmas</MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            {christmasMessages.map(sample => {
                                return (<Table 
                                key= {sample.id}
                                occasion= {sample.occasion}
                                text= {sample.text}
                                />);
                            }) }
                        </tr>
                    </MDBTableBody>
                </MDBTable>

                <MDBTable>
                <MDBTableHead>Hanukkah</MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            {hanukkahMessages.map(sample => {
                                return (<Table 
                                key= {sample.id}
                                occasion= {sample.occasion}
                                text= {sample.text}
                                />);
                            }) }
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
    )

}

export default SampleMessages;
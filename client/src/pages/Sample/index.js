import React from "react";
import sample from "../../sample.json";
import Table from "../../components/Table/index";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./sample.css";

function SampleMessages() {
  const birthdayMessages = sample.filter((messages) => {
    return messages.occasion.includes("birthday");
  });
  const hanukkahMessages = sample.filter((messages) => {
    return messages.occasion.includes("Hanukkah");
  });
  const christmasMessages = sample.filter((messages) => {
    return messages.occasion.includes("Christmas");
  });
  const valentineMessages = sample.filter((messages) => {
    return messages.occasion.includes("Valentine");
  });
  return (
    <div id="samples">
      <MDBTableHead id="head">Birthday</MDBTableHead>
      <MDBTable id="table">
        <MDBTableBody>
          <tr>
            {birthdayMessages.map((sample) => {
              return (
                <Table
                  key={sample.id}
                  occasion={sample.occasion}
                  text={sample.text}
                />
              );
            })}
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBTableHead id="head">Christmas</MDBTableHead>
      <MDBTable id="table">
        <MDBTableBody>
          <tr>
            {christmasMessages.map((sample) => {
              return (
                <Table
                  key={sample.id}
                  occasion={sample.occasion}
                  text={sample.text}
                />
              );
            })}
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBTableHead id="head">Hanukkah</MDBTableHead>
      <MDBTable id="table">
        <MDBTableBody>
          <tr>
            {hanukkahMessages.map((sample) => {
              return (
                <Table
                  key={sample.id}
                  occasion={sample.occasion}
                  text={sample.text}
                />
              );
            })}
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBTableHead id="head">Valentine's Day</MDBTableHead>
      <MDBTable id="table">
        <MDBTableBody>
          <tr>
            {valentineMessages.map((sample) => {
              return (
                <Table
                  key={sample.id}
                  occasion={sample.occasion}
                  text={sample.text}
                />
              );
            })}
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default SampleMessages;

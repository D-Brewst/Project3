import React from "react";
import API from "../../utils/API";
import Card from "../../components/Card/Card";
import CardButton from "../../components/CardButton";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";

/**
 *
 * @param {any[]} arr Array to select random item from
 * @returns {any} Random element from arr
 */

const randArrayEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

function Members() {
  const history = useHistory();
  const redirect = () => history.push("/payment");
  const [state, setState] = React.useState({
    messages: [],
    selected: {},
  });

  React.useEffect(() => {
    API.getCards().then((res) => {
      setState((state) => ({
        ...state,
        messages: res,
        selected: res?.length ? randArrayEl(res) : {},
      }));
    });
  }, []);

  const getRandom = () =>
    setState({
      ...state,
      selected: state.messages?.length ? randArrayEl(state.messages) : {},
    });

  // const valentineMessages = state.messages.filter((messages) => {
  //   return messages.occasion.includes("Valentine");
  // });
  // const hanukkahMessages = state.messages.filter((messages) => {
  //   return messages.occasion.includes("Hanukkah");
  // });
  // const christmasMessages = state.messages.filter((messages) => {
  //   return messages.occasion.includes("Christmas");
  // });

  /**
   *
   * @param {string} occasion What type of occasion you'd like to validate
   * @returns {boolean} Whether or not occasion exists in messages
   */
  const checkMessages = (occasion) =>
    state.messages.some((message) => message.occasion === occasion);
  const filterMessages = (occasion) =>
    state.messages.filter((messages) => messages.occasion === occasion);
  const getRandomMessage = (occasion) =>
    setState({
      ...state,
      selected: checkMessages(occasion)
        ? randArrayEl(filterMessages(occasion))
        : {},
    });

  // const getRandomChristmas = () =>
  //   setState({
  //     ...state,
  //     selected: christmasMessages?.length ? randArrayEl(christmasMessages) : {},
  //   });

  // const getRandomHanukkah = () =>
  //   setState({
  //     ...state,
  //     selected: hanukkahMessages?.length ? randArrayEl(hanukkahMessages) : {},
  //   });

  // const getRandomValentine = (x) =>
  //   setState({
  //     ...state,
  //     selected: x?.length ? randArrayEl(x) : {},
  //   });

  // const getRandomBirthday = () =>
  //   setState({
  //     ...state,
  //     selected: birthdayMessages?.length ? randArrayEl(birthdayMessages) : {},
  //   });

  return (
    <>
      <div>
        <div className="d-flex w-100 justify-content-center">
          {state.selected && <Card card={state.selected} onClick={getRandom} />}
        </div>
        <div
          style={{ display: "flex" }}
          className="btn-container mt-3 d-flex justify-content-center"
        >
          <MDBRow className="justify-content-center">
            <MDBCol className="col-auto">
              <CardButton text="Christmas" genRandom={getRandomMessage} />
            </MDBCol>
            <MDBCol className="col-auto">
              <CardButton text="Hanukkah" genRandom={getRandomMessage} />
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol className="col-auto">
              <CardButton text="Valentine" genRandom={getRandomMessage} />
            </MDBCol>
            <MDBCol className="col-auto">
              <CardButton text="Birthday" genRandom={getRandomMessage} />
            </MDBCol>
          </MDBRow>
        </div>
        
        <MDBRow className="justify-content-center">
            <MDBCol className="col-auto">
                <MDBBtn onClick={redirect}>
                  Send Money
                </MDBBtn>
            </MDBCol>
        </MDBRow>
        
      </div>
    </>
  );
}
export default Members;

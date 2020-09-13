// import React from "react";
// import Birthdaycard from "../../components/Birthday";
// import Halloweencard from "../../components/Halloween";
// import Hannukahcard from "../../components/Hannukah";
// import Christmascard from "../../components/Christmas";
// import CardExample from "../../components/Card";
// import { useGlobalContext } from "../../context/GlobalContext";
// import {Messages} from "../../context/actions";
// /**
//  *
//  * @param {any[]} arr Array to select random item from
//  * @returns {any} Random element from arr
//  */
// const randArrayEl = (arr) => arr[Math.floor(Math.random() * arr.length)];
// function Members() {
//   const [state, dispatch] = useGlobalContext();
//   React.useEffect(() => {
//     console.log(state)
//     let headers = { "Content-Type": "application/json" };
//     if (state.user.token) {
//       headers["Authorization"] = `Bearer ${state.user.token}`;
//     }
//      fetch("/api/messages", { headers })
//      .then(res=>res.json())
//      .then(data=> {
//       console.log("back from fetch:", data)
//       let randMe = randArrayEl(data)
//       console.log("randme:", randMe)
//       dispatch({
//         type: Messages,
//         mydata: data
//         // ...state,
//         // messages: data,
//         // selected: randMe
//         // selected: data.length ? randMe: {},
//       });
//       console.log("2:", state)
//     });
//   }, []);
//   const getRandom = () =>
//     dispatch({
//       ...state,
//       selected: state.messages ? randArrayEl(state.messages) : {},
//     });
//   return (
//     <>
//       {state.selected ? (
//         // <p>{JSON.stringify(state.selected)}</p>
//         <CardExample card={state.selected} onClick={getRandom} />
//       ):(<></>)}
//     </>
//   );
//   // return (
//   //   // <div>
//   //   //   <Birthdaycard />
//   //   //   <Halloweencard />
//   //   //   <Hannukahcard />
//   //   //   <Christmascard />
//   //   // </div>
//   // );
// }
// export default Members;
import React from "react";
import API from "../../utils/API";

import Birthdaycard from "../../components/Birthday";
import Halloweencard from "../../components/Valentine";
import Hannukahcard from "../../components/Hannukah";
import Christmascard from "../../components/Christmas";
import Card from "../../components/Card/Card";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ChristmasButton from "../../components/ChrismasButton";
import HanukkahButton from "../../components/HanukkahButton";
import ValentineButton from "../../components/ValentineButton";
import BirthdayButton from "../../components/BirthdayButton";
/**
 *
 * @param {any[]} arr Array to select random item from
 * @returns {any} Random element from arr
 */
const randArrayEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

function Members() {
  const [state, setState] = React.useState({
    messages: [],
    selected: {},
  });

  React.useEffect(() => {
    API.getCards().then((res) => {
      console.log(res);
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
  
  const birthdayMessages = state.messages.filter((messages) => {
    return messages.occasion.includes("Birthday");
  });
  const valentineMessages = state.messages.filter((messages) => {
    return messages.occasion.includes("Valentine");
  });
  const hanukkahMessages = state.messages.filter((messages) => {
    return messages.occasion.includes("Hanukkah");
  });
  const christmasMessages = state.messages.filter((messages) => {
    return messages.occasion.includes("Christmas");
  });
  
  const getRandomChristmas = () =>
  setState({
    ...state,
    selected: christmasMessages?.length ? randArrayEl(christmasMessages) : {},
  });

  const getRandomHanukkah = () =>
    setState({
      ...state,
      selected: hanukkahMessages?.length ? randArrayEl(hanukkahMessages) : {},
    });
  
  const getRandomValentine = () =>
    setState({
      ...state,
      selected: valentineMessages?.length ? randArrayEl(valentineMessages) : {},
    });
  
  const getRandomBirthday = () =>
    setState({
      ...state,
      selected: birthdayMessages?.length ? randArrayEl(birthdayMessages) : {},
    });

  return (
    <>
      {" "}
      <div>
        <div className="row">
          <div className="col" style={{ margin: "0 auto" }}>
            {state.selected && (
              <Card card={state.selected} onClick={getRandom} />
            )}
          </div>
        </div>
        <div id="">
          <ChristmasButton onClick={getRandomChristmas} />
          <HanukkahButton onClick={getRandomHanukkah} />
          <ValentineButton onClick={getRandomValentine} />
          <BirthdayButton onClick={getRandomBirthday} />
        </div>
      </div>
      <hr />
      {/* {state.messages.map((card, i) => (
        <Card key={i + "card"} card={card} />
      ))} */}
    </>
  );
}
export default Members;

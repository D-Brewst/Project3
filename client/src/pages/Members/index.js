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
import Card from "../../components/Card/Card";
import CardButton from "../../components/CardButton";

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
        <div className="d-flex w-100 justify-content-center">
          <CardButton text="Christmas" genRandom={getRandomMessage} />
          <CardButton text="Hanukkah" genRandom={getRandomMessage} />
          <CardButton text="Valentine" genRandom={getRandomMessage} />
          <CardButton text="Birthday" genRandom={getRandomMessage} />
        </div>
      </div>
    </>
  );
}
export default Members;

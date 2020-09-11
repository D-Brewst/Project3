import React from "react";
import API from "../../utils/API";

import Birthdaycard from "../../components/Birthday";
import Halloweencard from "../../components/Halloween";
import Hannukahcard from "../../components/Hannukah";
import Christmascard from "../../components/Christmas";
import Card from "../../components/Card";

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
        selected: res.length ? randArrayEl(res) : {},
      }));
    });
  }, []);

  const getRandom = () =>
    setState({
      ...state,
      selected: state.messages.length ? randArrayEl(state.messages) : {},
    });
  return (
    <>
      {state.selected && <Card card={state.selected} onClick={getRandom} />}

      <hr />

      {state.messages.map((card, i) => (
        <Card key={i + "card"} card={card} />
      ))}
    </>
  );
  // return (
  //   // <div>
  //   //   <Birthdaycard />
  //   //   <Halloweencard />
  //   //   <Hannukahcard />
  //   //   <Christmascard />
  //   // </div>
  // );
}
export default Members;

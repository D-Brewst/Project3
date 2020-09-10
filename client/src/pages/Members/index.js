import React from "react";
import Birthdaycard from "../../components/Birthday";
import Halloweencard from "../../components/Halloween";
import Hannukahcard from "../../components/Hannukah";
import Christmascard from "../../components/Christmas";
import CardExample from "../../components/Card/Card";
import { MDBRow } from "mdbreact";
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
    fetch("/api/messages")
      .then((res) => res.json())
      .then((res) =>
        setState((state) => ({
          ...state,
          messages: res,
          selected: res.length ? randArrayEl(res) : {},
        }))
      );
  }, []);

  const getRandom = () =>
    setState({
      ...state,
      selected: state.messages.length ? randArrayEl(state.messages) : {},
    });

  return (
    <div>
      <MDBRow className="mt-5 justify-content-center">
        <MDBRow className="mt-5 justify-content-center">
          {state.selected && (
            <CardExample card={state.selected} onClick={getRandom} />
          )}
          <Halloweencard />
        </MDBRow>
        <Christmascard />
        <Hannukahcard />
      </MDBRow>
    </div>
  );
}

export default Members;

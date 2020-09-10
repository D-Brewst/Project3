import React from "react";
import Birthdaycard from "../../components/Birthday";
import Halloweencard from "../../components/Halloween";
import Hannukahcard from "../../components/Hannukah";
import Christmascard from "../../components/Christmas";
import CardExample from "../../components/Card";
import { useGlobalContext } from "../../context/GlobalContext";
/**
 *
 * @param {any[]} arr Array to select random item from
 * @returns {any} Random element from arr
 */
const randArrayEl = (arr) => arr[Math.floor(Math.random() * arr.length)];
function Members() {
  const [state, dispatch] = useGlobalContext();
  React.useEffect(() => {
    let headers = { "Content-Type": "application/json" };
    if (state.user.token) {
      headers["Authorization"] = `Bearer ${state.user.token}`;
    }
    return fetch("/api/messages", { headers }).then((res) => {
      dispatch((state) => ({
        ...state,
        messages: res,
        selected: res.length ? randArrayEl(res) : {},
      }));
    });
  }, []);
  const getRandom = () => {};
  dispatch({
    ...state,
    selected: state.messages.length ? randArrayEl(state.messages) : {},
  });
  return (
    <>
      {state.selected && (
        <CardExample card={state.selected} onClick={getRandom} />
      )}
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

import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import Topcard from '../../components/TopCard';
import Bottomcard from '../../components/BottomCard';
=======
=======
import Topcard from '../../components/TopCard';
import Bottomcard from '../../components/BottomCard';
>>>>>>> master
import Birthdaycard from "../../components/Birthday";
import Halloweencard from "../../components/Halloween";
import Hannukahcard from "../../components/Hannukah";
import Christmascard from "../../components/Christmas";
import CardExample from "../../components/Card";
/**
 *
 * @param {any[]} arr Array to select random item from
 * @returns {any} Random element from arr
 */
const randArrayEl = (arr) => arr[Math.floor(Math.random() * arr.length)];
<<<<<<< HEAD
>>>>>>> 6278d2c53bd759428b9a975261efa2be871498c8
=======
>>>>>>> master

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> master
    <div>
      <Topcard />
      <Bottomcard />
    </div>
  )
<<<<<<< HEAD
=======
    <>
      {state.selected && (
        <CardExample card={state.selected} onClick={getRandom} />
      )}
    </>
=======

    <>{state.selected && <CardExample card={state.selected} onClick={getRandom} />}</>
>>>>>>> master
  );
  // return (
  //   // <div>
  //   //   <Birthdaycard />
  //   //   <Halloweencard />
  //   //   <Hannukahcard />
  //   //   <Christmascard />
  //   // </div>
  // );
<<<<<<< HEAD
>>>>>>> 6278d2c53bd759428b9a975261efa2be871498c8
=======

>>>>>>> master
}

export default Members;

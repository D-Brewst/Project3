import React from "react";
import Card from "../components/Card";
import message from "/message";

function Members() {
  const [message, setMessage] = useState([]);

  return (onChange = (event) => {
    const { text } = event.target;
    setMessage(text), (<Card />);
  });
}

export default Members;

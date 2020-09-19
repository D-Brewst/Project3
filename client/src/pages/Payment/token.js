import React, {useState, useEffect} from "react";
import API from "../../utils/API.js";
import Link from "./index";

function LinkToken() {
    const [state, setState] = useState("");

    const getLinkToken = async () => {
        const response = await fetch('/create_link_token', { method: 'POST' });
        const responseJSON = await response.json();
        return responseJSON.link_token;
      }

    useEffect(() => {
        setState((state) => state = getLinkToken());
    },[state])

    console.log(state);

    return (
        <div>
        <Link linktoken={state}/>
        </div>
    )
}

export default LinkToken;
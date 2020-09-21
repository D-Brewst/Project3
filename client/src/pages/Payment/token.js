import React, {useState, useEffect} from "react";
import API from "../../utils/API.js";
import Link from "./index";

function LinkToken() {
    const [state, setState] = useState("");

    const getLinkToken = async () => {
        const response = await fetch('/create_link_token', { method: 'POST' });
        const responseJSON = await response.json();
        setState((state) => state = responseJSON.link_token);
        return responseJSON.link_token;
      }

    useEffect(() => {
        getLinkToken();
    },[])

    console.log(state);

    return (
        <div>
            <Link linktoken={state} name={20}/>
        </div>
    )
}

export default LinkToken;
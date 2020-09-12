import React from "react";


function Table(props){
    return (
        <tr>
            <td>
                {props.text}
            </td>
        </tr>
    )
       
}

export default Table;
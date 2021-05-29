import React from "react";


const button = (props) => {
    return (
        <button onClick={props.onClickHandler}>
            {props.actionText}
        </button>
    )
}

export default button;
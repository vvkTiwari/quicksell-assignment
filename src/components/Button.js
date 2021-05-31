import React from "react";


const button = (props) => {
    return (
        <button onClick={props.onClickHandler} className={props.classes}>
            {props.actionText}
        </button>
    )
}

export default button;
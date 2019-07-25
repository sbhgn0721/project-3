import React from "react";
import "./style.css";

function TrashBtn(props) {
    return (
        <span className="delete-btn" {...props} role="button" tabIndex="0">
            </span>
    );
}

export default TrashBtn;
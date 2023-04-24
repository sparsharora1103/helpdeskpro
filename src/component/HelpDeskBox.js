import  Avatar  from "@material-ui/core/Avatar";
import React from "react";
import { useSelector } from "react-redux";
import "../css/HelpDeskBox.css";
import { selectUser } from "../features/userSlice";
function HelpDeskBox() {
    const user = useSelector(selectUser)
    return <div className = "helpdeskBox">
        <div className = "helpdeskBox__info">
            <Avatar
              src = {user.photo}
            />
            <h5>{user.displayName}</h5>
        </div>
      <div className = "helpdeskBox__helpdesk">
          <p>Describe your question here</p>
      </div>
    </div>;
}

export default HelpDeskBox;

import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";

import  FeaturedPlayListOutlined  from "@material-ui/icons/FeaturedPlayListOutlined";
import  AssignmentTurnedInOutlined  from "@material-ui/icons/AssignmentTurnedInOutlined";
import  PeopleAltOutlined from "@material-ui/icons/PeopleAltOutlined";
import  NotificationImportantOutlined  from "@material-ui/icons/NotificationImportantOutlined";
import  SearchOutlined  from "@material-ui/icons/SearchOutlined";
import  Avatar  from "@material-ui/core/Avatar";
import  LanguageOutlined  from "@material-ui/icons/LanguageOutlined";
import  Button  from "@material-ui/core/Button";
import '../css/Navbar.css';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Modal from "react-modal";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { Input } from "@material-ui/core";
import firebase from "firebase";

function Navbar() {

    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("")

    const handleQuestion = (e) => {
        e.preventDefault()

        setOpenModal(false)

        db.collection('questions').add({
            question: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user, 
        });

        setInput("")
    }

    return (
    <div 
    className = 'qHeader'>
        <div className =
         'qHeader__logo'>
             <img 
             src = ""
             alt = ""
             />
         </div>
         <div className = "qHeader__icons">
             <div className = "qHeader__icon">
                <HomeIcon />
             </div>
             <div className = "qHeader__icon">
                 <FeaturedPlayListOutlined />
             </div>
             <div className = "qHeader__icon">
                <AssignmentTurnedInOutlined /> 
             </div>
             <div className = "qHeader__icon">
                 <PeopleAltOutlined />
             </div>
             <div className = "qHeader__icon">
                 <NotificationImportantOutlined />
             </div>
         </div>
         <div className = "qHeader__input">
            <SearchOutlined/>
            <input type = "text" placeholder = "Search HelpDeskPro"/>
         </div>
         <div className = "qHeader__Rem">
          <div className = "qHeader__avatar">
              <Avatar 
               onClick = {() => auth.signOut()}src = {user.photo}
              />
          </div>
            <LanguageOutlined/>
            <Button onClick = {() => setOpenModal(true)}>
                Ask Question
            </Button>
            <Modal
              isOpen = {openModal}
              onRequestClose = {() => setOpenModal(false)}
              shouldCloseOnOverlayClick = {false}
              style = {{
                  overlay:{
                    width: 700,
                    height: 600,
                    backgroundColor: "rgba(0,0,0,0.9)",
                    zIndex: "1000",
                    top: "50%",
                    left: "50%",
                    marginTop: "-300px",
                    marginLeft: "-350px",
                  },
              }}
            >
                <div className = "modal__title">
                    <h5>Ask Question</h5>
                </div>
                    <div className = "modal__info">
                       <Avatar 
                         className = "avatar"
                         src = {user.photo}
                       />
                       <p>{user.displayName ? user.displayName : user.email} asked </p>
                       <div className = "modal__scope">
                          <PeopleAltOutlined />
                          <p>Public</p>
                          <ExpandMoreOutlined />
                       </div>
                    </div>
                    <div className = "modal__Field">
                        <Input
                          required
                          value = {input}
                          onChange = {(e) => setInput(e.target.value)} 
                          type = "text"
                          placeholder = "Write your question here"
                        />
                    </div>
                    <div className = "modal__buttons">
                      <button className = "cancel" onClick = {() => setOpenModal(false)}>
                        Cancel
                      </button> 
                      <button type = "submit" onClick={handleQuestion} className = "ask">
                          Ask Question
                      </button>
                    </div>
            </Modal>
         </div>
    </div>
    );
    
}

export default Navbar;

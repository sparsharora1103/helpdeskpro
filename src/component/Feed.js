import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import db from "../firebase";
import HelpDeskBox from "./HelpDeskBox";
import Post from "./Post";


function Feed() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        db.collection('questions').orderBy('timestamp', "desc").onSnapshot(snapshot => setPosts(snapshot.docs.map((doc) => (({
            id: doc.id,
            question: doc.data()
        })))))
    }, [])
    return ( <div className = "feed">
        <HelpDeskBox />
        {
            posts.map(({ id, question}) => (
                <Post
                   key = {id}
                   Id = {id}
                   question = {question.question}
                   timestamp = {question.timestamp}
                   helpdeskproUser = {question.user}
                /> 
            ))
        }
    </div>
    );
}

export default Feed;

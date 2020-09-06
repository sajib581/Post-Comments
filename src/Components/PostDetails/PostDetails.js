import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetails.css'

const PostDetails = () => {
    const {postId} = useParams()
    const [postData, setPostData] = useState({});
    
    //get single post data
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data =>setPostData(data))
    })
    //get all comments
    const [postComments, setPostComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data =>setPostComments(data))
    })
    const {body,title,id,userId} = postData
    return (
        <div className="post-details">      
            <h2>{title}</h2>      
            <p>{body}</p>
            <h3>Comments : ({postComments.length})</h3>
            {
                postComments.map(comment =><Comment key={comment.id} comment={comment}></Comment>)
            }

        </div>
    );
};

export default PostDetails;
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const URL = 'https://jsonplaceholder.typicode.com/posts'
        fetch(URL)
        .then(res =>res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div className="home">
            {
                posts.map(post =><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Home;
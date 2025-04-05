import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then ((res) => setPosts(res.data))
            .catch(console.error);
    }, []);
    return <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
}

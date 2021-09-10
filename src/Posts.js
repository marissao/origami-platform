import { useState } from 'react';
import Post from "./Post";

const Posts = () => {
    const [allPostsData, setAllPosts] = useState([1, 2, 3]);
    return (  
        <div className="Posts">
        <Post allPostsData={allPostsData} />
        </div>
    );
}
 
export default Posts;
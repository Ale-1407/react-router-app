import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    const getData = async() => {
        const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await promise.json();
        setPosts(json);
        console.log(json);
    }

    useEffect(() => {

        const fetchPosts = async () => {
           await getData();
        };

        fetchPosts();
    }, []);


    return (
        <>
            <div className="space">
                <h1>Posts Page</h1>
                <ul>
                    {posts && posts.map((post) => {
                        return <li key={post.id}>{post.title} : <Link className="link_detail" to={`/posts/${post.id}`}>Detail</Link> </li>
                    })}
                </ul>
            </div>
        </>
    )
}
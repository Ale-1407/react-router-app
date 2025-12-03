import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Homepage() {

    const [url, setUrl] = useState();
    const data = useFetch(url, url);
    

    return (
        <>
            <h1 className="space">Benvenuto in Homepage</h1>
            <div className="space">
                <h2>Post o User?</h2>
                <div>
                    <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/posts')}>Post</button>
                    <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/users')}>User</button>
                </div>
                <ul>
                    {data && data.map((el) => <li key={el.id}>{el.title || el.username}</li> )}
                </ul>
            </div>
        </>
    )
}
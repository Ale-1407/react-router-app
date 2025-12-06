import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Homepage() {
  const [url, setUrl] = useState();
  const data = useFetch(url, url);

  return (
    <>
      <h1 className="text-4xl font-bold p-4">Benvenuto in Homepage</h1>
      <div className="p-4">
        <h2 className="text-3xl font-semibold pb-4">Post o User?</h2>
        <div className="flex gap-3">
          <button
            className="btn"
            onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
          >
            Post
          </button>
          <button
            className="btn"
            onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
          >
            User
          </button>
        </div>
        <ul className="p-4">
          {data &&
            data.map((el) => <li key={el.id}>{el.title || el.username}</li>)}
        </ul>
      </div>
    </>
  );
}

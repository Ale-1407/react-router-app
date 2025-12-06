import { Link, useLoaderData } from "react-router";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <div className="p-4">
        <h1>Posts Page</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                {post.title} :{" "}
                <Link className="link_detail" to={`/posts/detail/${post.id}`}>
                  Detail
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

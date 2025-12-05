import { useLoaderData } from "react-router"

export default function DetailView() {

    const post = useLoaderData();

    return (
        <>
            <h1 className="space">Detail Page</h1>
            <h2 className="">Id: {post.id}</h2>
            <div className="">
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </div>
        </>
    )
}
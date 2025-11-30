export const getAllPostsLoader = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await promise.json();
    return json;
}

export const getSinglePostLoader = async ({params}) => {
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const json = await promise.json();
    return json;
}
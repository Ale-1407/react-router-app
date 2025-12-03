import useFetch from "../hooks/useFetch";

export default function Homepage() {

    const data = useFetch('https://jsonplaceholder.typicode.com/albums');
    
    console.log(data);
    

    return (
        <>
            <h1 className="space">Benvenuto in Homepage</h1>
            <div className="space">
                <h2>Albums</h2>
                <ul>
                    {data && data.map((album) => <li key={album.id}>{album.title}</li> )}
                </ul>
            </div>
        </>
    )
}
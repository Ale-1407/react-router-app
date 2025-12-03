import { useState, useEffect } from "react";

export default function useFetch(url, ...dependencies) {

    const [data, setData] = useState();

    const getData = async () => {
        const promise = await fetch(url);
        const json = await promise.json();
        setData(json);
    }

    useEffect(() => {
        const fetchData = async () => {
            await getData();
        };

        fetchData();
        }, dependencies
    );

    return data;
}
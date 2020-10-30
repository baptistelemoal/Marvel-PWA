import { useEffect, useState } from "react";
import useApi from "../hooks/use-api";

const Home = () => {
    const [characters, setCharacters] = useState([]);
    const api = useApi();

    useEffect(() => {
        api.get("/v1/public/characters")
            .then((res) => {
                const response = res.data;
                setCharacters(response.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    console.log(characters);

    return (
        <div>
            <div>Home</div>
        </div>
    );
};

export default Home;

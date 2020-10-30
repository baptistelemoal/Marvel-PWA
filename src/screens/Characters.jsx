import { useEffect, useState } from "react";
import CharacterInfoContainer from "../components/CharacterInfo";
import LoadingAnimation from "../components/LoadingAnimation";
import useApi from "../hooks/use-api";

const Characters = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const api = useApi();

    useEffect(() => {
        api.get("/v1/public/characters")
            .then((res) => {
                const response = res.data;
                setCharacters(response.data.results);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            {loading ? (
                <LoadingAnimation />
            ) : (
                characters.map((character) => {
                    const thumbnail = character.thumbnail;
                    const image = `${thumbnail.path}.${thumbnail.extension}`;
                    return (
                        <CharacterInfoContainer key={character.id} id={character.id} name={character.name} image={image}>
                            {character.description}
                        </CharacterInfoContainer>
                    );
                })
            )}
        </div>
    );
};

export default Characters;

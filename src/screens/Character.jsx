import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterDetail from "../components/CharacterDetail";
import LoadingAnimation from "../components/LoadingAnimation";
import useApi from "../hooks/use-api";

const Character = () => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState();
    const { id } = useParams();
    const api = useApi();

    useEffect(() => {
        api.get(`/v1/public/characters/${id}?limit=1`)
            .then((res) => {
                const response = res.data;
                setCharacter(response.data.results?.[0]);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading || !character) {
        return <LoadingAnimation />;
    }

    const thumbnail = character.thumbnail;
    const image = `${thumbnail.path}.${thumbnail.extension}`;
    return (
        <CharacterDetail image={image} name={character.name} comics={character.comics.items} date={character.modified}>
            {character.description}
        </CharacterDetail>
    );
};

export default Character;

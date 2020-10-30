import { useEffect, useState, Fragment } from "react";
import CharacterInfoContainer from "../components/CharacterInfo";
import Input from "../components/Input";
import LoadingAnimation from "../components/LoadingAnimation";
import Space from "../components/Space";
import Title from "../components/Title";
import useApi from "../hooks/use-api";

const Characters = () => {
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState([]);
    const [characters, setCharacters] = useState([]);
    const api = useApi();

    const filterCharacters = (value) => {
        if (value.length === 0) {
            setFilters([]);
            return;
        }
        const results = characters.filter((character) => character.name.includes(value));
        if (results.length > 0) {
            setFilters(results);
        }
    };

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
                <Fragment>
                    <Space spaceBottom={32}>
                        <Title>Rechercher un personnage</Title>
                        <Input type="text" onChange={(value) => filterCharacters(value)} placeholder="Recherche..." />
                    </Space>
                    {filters.length > 0 ? (
                        <Fragment>
                            {filters.map((character) => {
                                const thumbnail = character.thumbnail;
                                const image = `${thumbnail.path}.${thumbnail.extension}`;
                                return (
                                    <CharacterInfoContainer key={character.id} id={character.id} name={character.name} image={image}>
                                        {character.description}
                                    </CharacterInfoContainer>
                                );
                            })}
                        </Fragment>
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
                </Fragment>
            )}
        </div>
    );
};

export default Characters;

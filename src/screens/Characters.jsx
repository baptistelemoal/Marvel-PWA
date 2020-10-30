import { useEffect, useState, Fragment } from "react";
import Center from "../components/Center";
import CharacterInfoContainer from "../components/CharacterInfo";
import Input from "../components/Input";
import LoadingAnimation from "../components/LoadingAnimation";
import Pagination from "../components/Pagination";
import Space from "../components/Space";
import Title from "../components/Title";
import useApi from "../hooks/use-api";

const Characters = () => {
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
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

    const onChangePage = (newOffset) => {
        setOffset(newOffset);
    };

    useEffect(() => {
        setLoading(true);
        api.get(`/v1/public/characters?offset=${offset}&limit=25`)
            .then((res) => {
                const response = res.data;
                setCharacters(response.data.results);
            })
            .finally(() => setLoading(false));
    }, [offset]);

    return (
        <div>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <Center>
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
                    <Space spaceTop={32}>
                        <Pagination offset={offset} onChangeOffset={(newOffset) => onChangePage(newOffset)} />
                    </Space>
                </Center>
            )}
        </div>
    );
};

export default Characters;

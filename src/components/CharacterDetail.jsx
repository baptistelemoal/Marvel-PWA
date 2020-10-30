import "moment/locale/fr";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import List from "./List";
import moment from "moment";
import PropTypes from "prop-types";
import Space from "./Space";
import styled from "styled-components";
import Title from "./Title";

moment.locale("fr");

const CharacterLinkContainer = styled.div`
    a {
        color: ${({ theme }) => theme.flash};
        text-decoration: none;
    }
`;

const CharacterDetailContainer = styled.div`
    box-shadow: 0 0 1px 0 rgba(87, 113, 149, 0.3), 0 2px 4px -2px rgba(87, 113, 149, 0.5);
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 34px;
`;

const CharacterDetail = ({ image, name, children, date, comics }) => (
    <Fragment>
        <Space spaceBottom={16}>
            <CharacterLinkContainer>
                <Link to="/characters">Retour</Link>
            </CharacterLinkContainer>
        </Space>
        <CharacterDetailContainer>
            <Title>{name}</Title>
            <Image src={image} alt={name} width="100%" />
            <Space spaceTop={16}>{children}</Space>
            <Space spaceTop={16}>
                <b>Liste des comics :</b>
                <Space spaceTop={16}>
                    <List elements={comics} />
                </Space>
            </Space>
            <Space spaceTop={32}>
                <b>Modifié le {moment(date).format("DD/MM/YYYY")}</b>
            </Space>
        </CharacterDetailContainer>
    </Fragment>
);

CharacterDetail.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.string,
    date: PropTypes.string.isRequired,
    comics: PropTypes.array.isRequired,
};

export default CharacterDetail;

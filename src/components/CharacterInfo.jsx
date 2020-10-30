import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const CharacterInfoContainer = styled.div`
    box-shadow: 0 0 1px 0 rgba(87, 113, 149, 0.3), 0 2px 4px -2px rgba(87, 113, 149, 0.5);
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 34px;
`;

const CharacterImageContainer = styled.img`
    width: 100%;
    border-radius: 6px;
`;

const CharacterNameContainer = styled.div`
    font-weight: bold;
    font-size: 21px;
    margin-top: 16px;
`;

const CharacterDescriptionContainer = styled.div`
    margin-top: 16px;
`;

const CharacterLinkContainer = styled.div`
    margin-top: 16px;

    a {
        display: inline-block;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        color: ${({ theme }) => theme.body};
        background-color: ${({ theme }) => theme.flash};
        text-decoration: none;
        padding: 10px;
        border-radius: 6px;
    }
`;

const CharacterInfo = ({ id, name, children, image }) => (
    <CharacterInfoContainer>
        <div>
            <CharacterImageContainer src={image} />
        </div>
        <div>
            <CharacterNameContainer>{name}</CharacterNameContainer>
            <CharacterDescriptionContainer>{children}</CharacterDescriptionContainer>
            <CharacterLinkContainer>
                <Link to={`/characters/${id}`}>Voir plus</Link>
            </CharacterLinkContainer>
        </div>
    </CharacterInfoContainer>
);

CharacterInfo.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.string,
};

export default CharacterInfo;

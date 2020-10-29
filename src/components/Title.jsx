import PropTypes from "prop-types";
import styled from "styled-components";

const TitleContainer = styled.h1`
    display: block;
    margin-bottom: 32px;
`;

const Title = ({ children }) => <TitleContainer>{children}</TitleContainer>;

Title.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Title;

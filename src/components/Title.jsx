import PropTypes from "prop-types";
import styled from "styled-components";

const TitleContainer = styled.h1`
    display: block;
    margin-bottom: 8px;
`;

const LineContainer = styled.span`
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.flash};
    margin-bottom: 32px;
    border-radius: 6px;
`;

const Title = ({ children }) => (
    <div>
        <TitleContainer>{children}</TitleContainer>
        <LineContainer />
    </div>
);

Title.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Title;

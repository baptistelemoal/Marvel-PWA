import PropTypes from "prop-types";
import styled from "styled-components";

const CenterContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
`;

const Center = ({ children }) => <CenterContainer>{children}</CenterContainer>;

Center.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Center;

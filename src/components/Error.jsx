import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorContainer = styled.div`
    color: ${({ theme }) => theme.flash};
`;

const Error = ({ children }) => <ErrorContainer>{children}</ErrorContainer>;

Error.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Error;

import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorContainer = styled.div`
    color: ${({ theme }) => theme.flash};
    margin-bottom: ${(props) => (props.spaceBottom ? "16px" : "0")};
`;

const Error = ({ children, spaceBottom }) => <ErrorContainer spaceBottom={spaceBottom}>{children}</ErrorContainer>;

Error.propTypes = {
    children: PropTypes.any.isRequired,
    spaceBottom: PropTypes.bool,
};

export default Error;

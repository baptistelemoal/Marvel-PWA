import PropTypes from "prop-types";
import styled from "styled-components";

const BlocContainer = styled.div`
    box-shadow: 0 0 1px 0 rgba(87, 113, 149, 0.3), 0 2px 4px -2px rgba(87, 113, 149, 0.5);
    padding: 20px;
    border-radius: 6px;
`;

const Bloc = ({ children }) => <BlocContainer>{children}</BlocContainer>;

Bloc.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Bloc;

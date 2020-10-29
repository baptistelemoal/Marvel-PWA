import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonContainer = styled.button`
    display: block;
    background-color: ${({ theme }) => theme.flash};
    font-size: inherit;
    font-family: inherit;
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
`;

const Button = ({ children }) => <ButtonContainer type="submit">{children}</ButtonContainer>;

Button.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Button;

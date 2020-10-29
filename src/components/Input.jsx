import PropTypes from "prop-types";
import styled from "styled-components";

const InputContainer = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    padding: 12px 16px;
    margin-bottom: 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.border};
`;

const Input = ({ placeholder, type, name, value, onChange }) => (
    <InputContainer placeholder={placeholder} type={type} name={name} value={value} onChange={(e) => onChange(e.target.value)} />
);

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
};

export default Input;

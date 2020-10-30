import PropTypes from "prop-types";
import styled from "styled-components";

const PaginationContainer = styled.div`
    margin-left: -8px;
    margin-right: -8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ButtonContainer = styled.button`
    display: block;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.flash} !important;
    border: 2px solid ${({ theme }) => theme.flash} !important;
    font-size: inherit;
    font-family: inherit;
    border: none;
    padding: 10px;
    min-width: 150px;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
`;

const Pagination = ({ offset, onChangeOffset }) => (
    <PaginationContainer>
        {offset > 0 && <ButtonContainer onClick={() => onChangeOffset(offset - 25)}>Précédent</ButtonContainer>}
        <ButtonContainer onClick={() => onChangeOffset(offset + 25)}>Suivant</ButtonContainer>
    </PaginationContainer>
);

Pagination.propTypes = {
    offset: PropTypes.number.isRequired,
    onChangeOffset: PropTypes.func.isRequired,
};

export default Pagination;

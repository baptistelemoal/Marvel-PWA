import PropTypes from "prop-types";
import { Fragment } from "react";
import styled from "styled-components";
import Container from "./Container";
import Space from "./Space";

const ListContainer = styled.ul`
    list-style: none;
`;

const List = ({ elements }) => (
    <ListContainer>
        {elements.length > 0 ? (
            elements.map((element) => (
                <Space key={element.name} spaceBottom={16}>
                    <Container>{element.name}</Container>
                </Space>
            ))
        ) : (
            <Fragment>Aucun comics</Fragment>
        )}
    </ListContainer>
);

List.propTypes = {
    elements: PropTypes.array.isRequired,
};

export default List;

import PropTypes from "prop-types";
import styled from "styled-components";

const SpaceContainer = styled.div`
    margin-left: ${(props) => (props.spaceLeft ? `${props.spaceLeft}px` : "0")};
    margin-right: ${(props) => (props.spaceRight ? `${props.spaceRight}px` : "0")};
    margin-top: ${(props) => (props.spaceTop ? `${props.spaceTop}px` : "0")};
    margin-bottom: ${(props) => (props.spaceBottom ? `${props.spaceBottom}px` : "0")};
`;

const Space = ({ spaceLeft, spaceRight, spaceTop, spaceBottom, children }) => (
    <SpaceContainer spaceLeft={spaceLeft} spaceRight={spaceRight} spaceTop={spaceTop} spaceBottom={spaceBottom}>
        {children}
    </SpaceContainer>
);

Space.propTypes = {
    spaceLeft: PropTypes.number,
    spaceRight: PropTypes.number,
    spaceTop: PropTypes.number,
    spaceBottom: PropTypes.number,
    children: PropTypes.any.isRequired,
};

export default Space;

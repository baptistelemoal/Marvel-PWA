import PropTypes from "prop-types";
import styled from "styled-components";

const ImageContainer = styled.img`
    display: block;
    margin-left: ${(props) => (props.center ? "auto" : "initial")};
    margin-right: ${(props) => (props.center ? "auto" : "initial")};
    margin-bottom: ${(props) => (props.spaceBottom ? "32px" : "0")};
`;

const Image = ({ src, alt, width, heigth, center, spaceBottom }) => (
    <ImageContainer src={src} alt={alt} width={width} heigth={heigth} center={center} spaceBottom={spaceBottom} />
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.any,
    heigth: PropTypes.any,
    center: PropTypes.bool,
    spaceBottom: PropTypes.bool,
};

export default Image;

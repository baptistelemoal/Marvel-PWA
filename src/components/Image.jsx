import PropTypes from "prop-types";
import styled from "styled-components";

const ImageContainer = styled.img`
    display: block;
    margin-left: ${(props) => (props.center ? "auto" : "initial")};
    margin-right: ${(props) => (props.center ? "auto" : "initial")};
`;

const Image = ({ src, alt, width, heigth, center }) => <ImageContainer src={src} alt={alt} width={width} heigth={heigth} center={center} />;

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.any,
    heigth: PropTypes.any,
    center: PropTypes.bool,
};

export default Image;

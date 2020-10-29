import PropTypes from "prop-types";

const Form = ({ children, onSubmit }) => <form onSubmit={onSubmit}>{children}</form>;

Form.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Form;

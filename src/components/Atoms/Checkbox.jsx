import PropTypes from "prop-types";
import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 0.5rem;
`;

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Checkbox;

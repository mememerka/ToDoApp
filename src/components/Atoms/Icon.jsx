import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const IconStyled = styled.i`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  transform: ${(props) => props.transform};
`;

const Icon = ({
  name,
  size = "24px",
  color = "black",
  margin = "none",
  transform = "none",
}) => (
  <IconStyled
    className="material-icons"
    size={size}
    color={color}
    margin={margin}
    transform={transform}
  >
    {name}
  </IconStyled>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;

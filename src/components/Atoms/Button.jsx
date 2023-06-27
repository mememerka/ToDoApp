import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../styles/theme";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border: none;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderRadius};
  transition: all 0.3s ease; /* Agrega una transición suave */
  cursor: pointer;

  &:hover {
    transform: scale(1.3); /* Aumenta el tamaño en un 5% */
  }
`;

const Button = ({
  text,
  backgroundColor = theme.colors.secondary,
  textColor = "white",
  padding = "10px 20px",
  fontSize = "16px",
  borderRadius = "4px",
  margin = "auto",
  width = "auto",
  height = "auto",
  onClick,
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    textColor={textColor}
    padding={padding}
    fontSize={fontSize}
    borderRadius={borderRadius}
    margin={margin}
    onClick={onClick}
    width={width}
    height={height}
  >
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

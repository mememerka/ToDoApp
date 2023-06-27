import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = ({ type, ...props }) => {
  const StyledInput = styled.input`
    /* Box */
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "auto"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "10px"};
    border: ${(props) => props.border || "1px solid #000000"};
    border-radius: ${(props) => props.borderRadius || "4px"};
    /* Look */
    color: ${(props) => props.color || "#000000"};
    background-color: ${(props) => props.backgroundColor || "#ffffff"};
    opacity: ${(props) => props.opacity || "1"};
  `;

  return <StyledInput type={type} {...props} />;
};

Input.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.string,
};

export default Input;

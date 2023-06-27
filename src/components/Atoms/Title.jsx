import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const Title = ({ color, fontSize, fontWeight, children }) => {
  return (
    <StyledTitle color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </StyledTitle>
  );
};

Title.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Title;

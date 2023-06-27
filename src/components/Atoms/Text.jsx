import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledText = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

const Text = ({ color, fontSize, children }) => {
  return (
    <StyledText color={color} fontSize={fontSize}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Text;

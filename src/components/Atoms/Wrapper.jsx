import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../styles/theme";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;

const Wrapper = ({
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  backgroundColor = "transparent",
  border = "none",
  borderColor = theme.colors.secondary,
  borderRadius = "5px",
  padding = "0",
  margin = "0",
  width = "auto",
  height = "auto",
  children,
}) => (
  <WrapperContainer
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
    backgroundColor={backgroundColor}
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    padding={padding}
    margin={margin}
    width={width}
    height={height}
  >
    {children}
  </WrapperContainer>
);

Wrapper.propTypes = {
  flexDirection: PropTypes.oneOf(["row", "column"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
  ]),
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Wrapper;

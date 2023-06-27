import React from "react";
import Wrapper from "../Atoms/Wrapper";
import Icon from "../Atoms/Icon";

function DailyNavbar() {
  return (
    <Wrapper
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      backgroundColor="blue"
    >
      <Icon name="arrow_back_ios" />
      <Icon name="arrow_forward_ios" />
      <Icon />
    </Wrapper>
  );
}

export default DailyNavbar;

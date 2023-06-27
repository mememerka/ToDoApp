import React from "react";
import Wrapper from "../Atoms/Wrapper";
import Button from "../Atoms/Button";
import Icon from "../Atoms/Icon";
import theme from "../../styles/theme";

function NavBar() {
  return (
    <Wrapper
      flexDirection="column"
      width="70px"
      height="50vh"
      justifyContent="space-around"
    >
      <Button
        text={
          <Icon
            name={"calendar_today"}
            size="20px"
            color={theme.colors.textBlue}
          />
        }
        padding="none"
        margin="2px"
        backgroundColor="transparent"
      />
      <Button
        text={
          <Icon
            name={"calendar_month"}
            size="20px"
            color={theme.colors.textBlue}
          />
        }
        padding="none"
        margin="2px"
        backgroundColor="transparent"
      />
      <Button
        text={
          <Icon name={"person"} size="20px" color={theme.colors.textBlue} />
        }
        padding="none"
        margin="2px"
        backgroundColor="transparent"
      />
    </Wrapper>
  );
}

export default NavBar;

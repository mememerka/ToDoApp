import React, { useState } from "react";
import Wrapper from "../Atoms/Wrapper";
import theme from "../../styles/theme";
import Title from "../Atoms/Title";
import Icon from "../Atoms/Icon";
import Text from "../Atoms/Text";
import Button from "../Atoms/Button";

function Task({ day, tasks }) {
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);

  return (
    <Wrapper
      width="28%"
      height="75vh"
      padding="25px"
      backgroundColor={theme.colors.secondary}
      flexDirection="column"
      border="solid"
      borderRadius="10px"
      borderColor={theme.colors.textBlue}
      alignItems="center"
    >
      <Title children={day} fontSize={"60px"} color={theme.colors.textPink} />
      {tasks.map((task) => (
        <Wrapper
          justifyContent="space-around"
          alignItems="center"
          width="90%"
          height="10%"
          borderColor="secondary"
          margin="2px"
          backgroundColor="white"
        >
          {/* <Icon
            name="horizontal_rule"
            margin="0px 5px"
            transform="rotate(0.5turn)"
          /> */}
          <Text children={"|"} fontSize={"35px"} color={"green"} />
          <Text children={task.title} />
          <Button
            text={<Icon name={"more_vert"} />}
            backgroundColor="transparent"
            margin="0 -19px"
          />
          {optionsIsOpen && (
            <Wrapper>
              <Text children="MODAL IS OPEN" />
            </Wrapper>
          )}
        </Wrapper>
      ))}
    </Wrapper>
  );
}

export default Task;

<Wrapper justifyContent="space-around" alignItems="center">
  <Icon name="radio_button_checked" margin="0px 9px 0px 0px" />
  <Text children="Lorem ipsum dolor sit amet." />
</Wrapper>;

import React from "react";
import Wrapper from "../Atoms/Wrapper";
import theme from "../../styles/theme";
import Task from "../Molecules/Task";
import DailyNavbar from "../Molecules/DailyNavbar";
import data from "../../taskData.json";

function DayCalendar() {
  return (
    <Wrapper flexDirection="column" height="100vh" width="100vw">
      <Wrapper
        margin="20px 30px 0px 0px"
        backgroundColor="white"
        alignItems="center"
        justifyContent="center"
      >
        <DailyNavbar />
      </Wrapper>
      <Wrapper
        backgroundColor={theme.colors.background}
        alignItems="center"
        height="90vh"
        width="90vw"
        justifyContent="space-around"
        padding="15px"
      >
        {data.map((dayData) => (
          <Task day={dayData.day} tasks={dayData.tasks} />
        ))}
      </Wrapper>
    </Wrapper>
  );
}

export default DayCalendar;

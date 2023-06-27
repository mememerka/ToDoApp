import "./App.css";
import Button from "./components/Atoms/Button";
import Icon from "./components/Atoms/Icon";
import Wrapper from "./components/Atoms/Wrapper";
import NavBar from "./components/Molecules/NavBar";
import DayCalendar from "./components/pages/dayCalendar";
import theme from "./styles/theme";
function App() {
  return (
    <Wrapper flexDirection="row" backgroundColor={theme.colors.background}>
      <NavBar />
      <DayCalendar />
    </Wrapper>
  );
}

export default App;

import { MainContainer } from "./components/MainContainer";
import { MantineProvider } from "@mantine/core";
// import "./App.css";

function App() {
  return (
    <MantineProvider>
      <MainContainer />
    </MantineProvider>
  );
}

export default App;

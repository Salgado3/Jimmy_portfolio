import { MainContainer } from "./components/MainContainer";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/carousel/styles.css";
function App() {
  return (
    <MantineProvider>
      <MainContainer />
    </MantineProvider>
  );
}

export default App;

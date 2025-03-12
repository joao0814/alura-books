import Header from "./components/Header/Index";
import Pesquisa from "./components/Pesquisa";
import { AppContainer } from "./styles/App.styles";

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;

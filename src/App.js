import Header from "./components/Header/Index";
import Pesquisa from "./components/Pesquisa";
import UltimoLancamentos from "./components/UltimosLancamentos";
import { AppContainer } from "./styles/App.styles";

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimoLancamentos />
    </AppContainer>
  );
}

export default App;

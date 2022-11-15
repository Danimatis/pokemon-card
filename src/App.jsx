import "./App.css";
import PokemonCard from "./components/pokemonCard";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import PokemonList from "./components/pokemonList";
function App() {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;

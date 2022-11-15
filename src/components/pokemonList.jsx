import { useEffect } from "react";
import { useState } from "react";
import PokemonCard from "./pokemonCard";

const PokemonList = () => {
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const getPokemonNames = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=898"
      );
      const data = await response.json();
      setListOfPokemon(
        data.results.map((pokemon, index) => {
          return { name: pokemon.name, id: index + 1 };
        })
      );
      console.log(listOfPokemon);
    };
    getPokemonNames();
  }, []);

  const handleSelectedPokemon = ({ target: { value } }) => {
    setSelectedPokemon(value);
  };
  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <select onChange={handleSelectedPokemon} className="form-select w-50">
          {listOfPokemon.map((pokemon) => (
            <option key={pokemon.id} value={pokemon.id}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
      {selectedPokemon ? (
        <PokemonCard selectedPokemon={selectedPokemon} />
      ) : null}
    </>
  );
};
export default PokemonList;

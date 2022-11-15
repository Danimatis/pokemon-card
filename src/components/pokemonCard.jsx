import { useEffect } from "react";
import { useState } from "react";

const PokemonCard = ({ selectedPokemon }) => {
  console.log(selectedPokemon);
  const [newPokemon, setNewPokemon] = useState(selectedPokemon);

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    };
    getPokemon();
  }, [selectedPokemon]);

  useEffect(() => {
    const getNextPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${newPokemon}`
      );
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    };
    getNextPokemon();
  }, [newPokemon]);

  const handleNextPokemon = () => {
    if (newPokemon + 1 > 898) {
      setNewPokemon(0);
    }
    setNewPokemon((newPokemon) => Number(newPokemon) + 1);
  };
  const handlePreviousPokemon = () => {
    if (newPokemon - 1 < 1) {
      setNewPokemon(899);
    }
    setNewPokemon((newPokemon) => Number(newPokemon) - 1);
  };
  if (!pokemon) {
    return;
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn btn-danger" onClick={handlePreviousPokemon}>
        Previous
      </button>
      <div className="card mx-5" style={{ width: "18rem" }}>
        <img
          src={pokemon.sprites.front_default}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center">{pokemon.name}</h5>
        </div>
      </div>
      <button className="btn btn-success" onClick={handleNextPokemon}>
        Next
      </button>
    </div>
  );
};
export default PokemonCard;

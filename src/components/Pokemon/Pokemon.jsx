import React, {useEffect, useState} from "react";
import Pokemoncard from "./Pokemoncard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const api = "https://pokeapi.co/api/v2/pokemon?limit=200";

  const fetchPokemonData = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();

      const detailedData = await Promise.all(
        data.results.map(async (item) => {
          const res = await fetch(item.url);
          return res.json();
        })
      );

      setPokemon(detailedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="box">
      <header>
        <h1>Let's Catch Pokémon</h1>
      </header>

      <div className="pokemon-search">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <div className="row">
            {filteredPokemon.map((poke) => (
              <div
                key={poke.id}
                className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
              >
                <Pokemoncard pokemonData={poke} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Pokemon;

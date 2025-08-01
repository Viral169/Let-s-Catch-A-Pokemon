import "./pokemon.css";

const Pokemoncard = ({pokemonData}) => {
  if (!pokemonData) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <>
      <div className="pokemon-cardd card shadow-sm border-0 rounded-4 p-3 text-center">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          className="card-img-top mx-auto img-fluid"
          alt={pokemonData.name}
          style={{maxHeight: "120px", width: "auto", objectFit: "contain"}}
        />

        <div className="card-body d-flex flex-column justify-content-around">
          <h1 className="card-title text-capitalize fw-bold fs-1 mb-3 mt-5">
            {pokemonData.name}
          </h1>

          <div className="mb-3">
            {pokemonData.types.map((curType, index) => (
              <span
                key={index}
                className="badge bg-success rounded-pill fs-3 mx-1"
              >
                {curType.type.name}
              </span>
            ))}
          </div>

          <div className="row gx-1">
            <div className="col-4">
              <small className="fw- fs-3 text-muted">Height</small>
              <p className="m- fs-4">{pokemonData.height}</p>
            </div>
            <div className="col-4">
              <small className="fw- fs-3 text-muted">Weight</small>
              <p className="m- fs-4">{pokemonData.weight}</p>
            </div>
            <div className="col-4">
              <small className="fw- fs-3 text-muted">Speed</small>
              <p className="m- fs-4">
                {
                  pokemonData.stats.find((stat) => stat.stat.name === "speed")
                    ?.base_stat
                }
              </p>
            </div>
          </div>

          <hr />

          <div className="row gx-1">
            <div className="col-4">
              <small className="fw- fs-3 text-muted">XP</small>
              <p className="m- fs-4">{pokemonData.base_experience}</p>
            </div>
            <div className="col-4">
              <small className="fw- fs-3 text-muted">Attack</small>
              <p className="m- fs-4">
                {
                  pokemonData.stats.find((stat) => stat.stat.name === "attack")
                    ?.base_stat
                }
              </p>
            </div>
            <div className="col-4">
              <small
                className="fw- fs-3 text-muted"
                title={pokemonData.abilities.map((a) => a.ability.name)}
              >
                Abilities
              </small>
              <p className="m- fs-4 text-truncate">
                {pokemonData.abilities.map((a) => `${a.ability.name},`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemoncard;

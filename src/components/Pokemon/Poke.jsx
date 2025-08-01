import React from "react";

const Poke = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{width: "25rem"}}>
              <img
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                }
                // className="card-img-top"
                className="fluid"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text fs-1">Bulbasaur</p>
                <span className="badge rounded-pill text-bg-success w-50 text-center fs-3">
                  Fire
                </span>
                <ul className="list-group list-group-flush d-flex flex-row">
                  <li className="list-group-item fs-4 border-0">Height:</li>
                  <li className="list-group-item fs-4 border-0">Width:</li>
                  <li className="list-group-item fs-4 border-0">Speed:</li>
                </ul>
                <ul className="list-group list-group-flush d-flex flex-row">
                  <li className="list-group-item fs-4 border-0">Experience</li>
                  <li className="list-group-item fs-4 border-0">Attack</li>
                  <li className="list-group-item fs-4 border-0">Abilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Poke;

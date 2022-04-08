import React from "react";

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}/`

export default function Fetcher() {

    // your task here is to fetch Pokemon from a given URL and just display is name
    // once a Pokemon is fetched, increment your id to fetch the next one on click

    // fetch one Pokemon data when this component in rendered
    console.log(getPokemonUrl(1)) // delete this, only reason to log it is so linter doesn't cry before any code is written

    // return 2 elements:
    // 1st: a button which will trigger another fetch on click, for a Pokemon with next id
    // 2nd: Pokemons
    return (
        <div>
            <button>FETCH</button>
            {/* display pokemons in a list here, you can use your existing components from homework number 4 or just display a name */}
        </div>
    )
}
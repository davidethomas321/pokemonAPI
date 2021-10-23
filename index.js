const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokeData = document.querySelector('#pokeButton');
const pokeSpawn1 = document.querySelector('.pokeSpawn1');
const pokeSpawn2 = document.querySelector('.pokeSpawn2');
const types = document.querySelector('.types');
const abilities = document.querySelector('.abilities');

getPokeData.addEventListener("click", generatePokemon);

async function generatePokemon(e) {
    e.preventDefault();

    function randomNum(min, max) {
        min = Math.ceil(1);
        max = Math.floor(898);
        return Math.floor(Math.random() * (max - min) + min);
      };
    
    let pokeNum = randomNum(1, 898);

    pokeSpawn1.innerHTML = '';
    pokeSpawn2.innerHTML = '';
    abilities.innerHTML = '';
    types.innerHTML = '';

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
    .then(response => response.json())
    .then(json => pokeData(json));

}

function pokeData(displayedPokemon){
    let pokemonName = document.createElement('h3');
    pokemonName.className = 'pokemonName';
    pokemonName.innerText = displayedPokemon.name;

    let pokemonImage = document.createElement('img');
    pokemonImage.className = 'pokemonImage';
    pokemonImage.src = displayedPokemon.sprites.front_shiny;

    let pokemonType1 = document.createElement('h3');
    pokemonType1.className = 'pokemonType1';
    pokemonType1.innerText = 'Type 1: '+displayedPokemon.types[0].type.name;
    

    let pokemonType2 = document.createElement('h3');
    pokemonType2.className = 'pokemonType2';
    pokemonType2.innerText = displayedPokemon.types[1] === undefined ? "" : `Type 2: ${displayedPokemon.types[1].type.name}`;


    let pokemonAbility1 = document.createElement('h3');
    pokemonAbility1.className = 'pokemonAbility1';
    pokemonAbility1.innerText = 'Ability 1: '+displayedPokemon.abilities[0].ability.name;

    let pokemonAbility2 = document.createElement('h3');
    pokemonAbility2.className = 'pokemonAbility2';
    pokemonAbility2.innerText = displayedPokemon.abilities[1] === undefined ? "" : 'Ability 2: '+displayedPokemon.abilities[1].ability.name;


    console.log(pokemonName);
    console.log(pokemonImage);
    console.log(pokemonType1);
    console.log(pokemonType2);
    console.log(pokemonAbility1);
    console.log(pokemonAbility2);


    pokeSpawn1.appendChild(pokemonName);
    types.appendChild(pokemonType1);
    types.appendChild(pokemonType2);
    abilities.appendChild(pokemonAbility1);
    abilities.appendChild(pokemonAbility2);
    pokeSpawn2.appendChild(pokemonImage);

}

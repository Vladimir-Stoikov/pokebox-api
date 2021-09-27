const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const pokeContainer = document.getElementById('poke-container');

const pokemonCount = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#F4E7DA',
  rock: '#D5D5D4',
  fairy: '#DCEAFF',
  poison: '#98D7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#e6e0d4',
  normal: '#f5f5f5',
};

fetchPockemos();

async function fetchPockemos() {
  for (let i = 1; i < pokemonCount; i++) {
    await getDate(API_URL, i);
  }
}

async function getDate(url, id) {
  const res = await fetch(url + `/${id}`);
  const data = await res.json();
  createCard(data);
}

function createCard({ id, name, types }) {
  const newPokemon = document.createElement('div');
  let fixedId = id;
  fixedId < 10 ? (fixedId = `00${id}`) : fixedId < 100 ? (fixedId = `0${id}`) : (fixedId = id);
  const mainType = types[0].type.name;
  newPokemon.classList.add('card');
  newPokemon.innerHTML = `
  <img src="https://img.pokemondb.net/artwork/large/${name}.jpg" alt="pokemon-picture" />
  <h5>#${fixedId}<h5>
  <h2>${name}<h2>
  <h5>${mainType}</h5
  `;
  newPokemon.style.backgroundColor = `${colors[mainType]}`;
  pokeContainer.appendChild(newPokemon);
}

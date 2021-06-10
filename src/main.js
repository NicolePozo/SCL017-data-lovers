import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*flip cards*/
//const cards = document.querySelectorAll('.flip-cards');

/*function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));*/

const pokemon = data.pokemon 
for(let i=0; i <pokemon.lenght; i++){
    console.log(pokemon.size[i].height);
    console.log(pokemon.size[i].weight);
}

console.log(pokemon[0].size, pokemon[0].weight);


//console.log(example, data);

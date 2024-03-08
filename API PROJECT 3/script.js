const searchInput = document.getElementById("search-input");
const seatchBtn = document.getElementById("search-button");
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const pokemonID = document.getElementById('pokemon-id');
const pokemonName = document.getElementById('pokemon-name');
const slika = document.getElementById("spirite-container");








const basicUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";


const retriveData = async () =>
{

    try
    {

        const inputValue = searchInput.value.toLowerCase();


        const realUrl = `${basicUrl}/${inputValue}`;
        const info = await fetch(realUrl);
        const data = await info.json();
        console.log(data);

        /// setting pokemon status 
        pokemonID.textContent = `${data.id}`;
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        weight.textContent = `${data.weight}`;
        height.textContent = `${data.height}`;

        slika.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" 
        alt="${data.name}"> `;


       
        

    }
    catch (err)
    {

        console.log(err);
        alert("Pokémon not found");
        

    }



}












seatchBtn.addEventListener("click", ()=>
{
    retriveData();
    
})
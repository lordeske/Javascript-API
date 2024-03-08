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
const img = document.getElementById("spirite-container");









const basicUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";


const retriveData = async () =>
{

    try
    {

        const inputValue = searchInput.value.toLowerCase();

        if(inputValue === "")
        {
            alert("Please enter Pokémon Name or ID");
            return;
        }


        const realUrl = `${basicUrl}/${inputValue}`;
        const info = await fetch(realUrl);
        const data = await info.json();
        console.log(data);

        /// setting pokemon text
        pokemonID.textContent = `#${data.id}`;
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        weight.textContent = `${data.weight}`;
        height.textContent = `${data.height}`;

        img.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" 
        alt="${data.name}"> `;



        //setting stats
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;



        types.innerHTML = data.types.map(element=> `<span class="type ${element.type.name}">${element.type.name.toUpperCase()}</span>`).join("");

      
      
       
        

    }
    catch (err)
    {

        clearUI();
        console.log(err);
        alert("Pokémon not found");


    }



}





const clearUI = ()=>{

    const sprite = document.getElementById("sprite");
    if(sprite)
    {
        sprite.remove();

    }


    // reset stats
    pokemonName.textContent = '';
    pokemonID.textContent = '';
    types.innerHTML = '';
    height.textContent = '';
    weight.textContent = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';

    console.log("eske");

}








seatchBtn.addEventListener("click", (e)=>
{
    e.preventDefault();
    clearUI();
    retriveData();
    
})
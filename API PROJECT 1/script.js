const authorContainer  = document.getElementById("author-container");
const loadMoreBtn  = document.getElementById("load-more-btn");




fetch("https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-3c1bded3-0610-4289-a389-8d5d64326a93")
.then((res)=> res.json()).then((data)=> console.log(data)).catch((err)=>console.error(`Desila se greska: ${err}`));

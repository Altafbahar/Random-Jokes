const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=sexist,explicit&format=json&type=single`;

let getJoke = async () => {
  
    let data = await fetch(url);
    let response = await data.json();
    
   
      jokeContainer.innerHTML = response.joke;

    
      

};

btn.addEventListener("click", getJoke);

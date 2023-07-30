const button = document.querySelector(".card btn");
const jokeDiv = document.querySelector(".card blockquote");
const jokeAPI = "https://icanhazdadjoke.com/"

document.addEventListener("DOMContentLoaded", getJock);

button.addEventListener("click", getJock);

async function getJock() {
  const jokeData = await fetch(jokeAPI, {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}

function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text=" + jokeDiv.innerHTML, "Tweet Window");
}
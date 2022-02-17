const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("generateJoke");

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {
  config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

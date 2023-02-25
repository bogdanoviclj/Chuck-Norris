const buttonEl = document.querySelector("#button");
const jokeEl = document.querySelector("#joke");

const getNewJoke = () => {
    return fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {return response.json()})
    .then((string) => {
        const html = `
        <p> ${string.value} </p>
        `;
        jokeEl.innerHTML = html;
    });
}

buttonEl.addEventListener("click", getNewJoke)
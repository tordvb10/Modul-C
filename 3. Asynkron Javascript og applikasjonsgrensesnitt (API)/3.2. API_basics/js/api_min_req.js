const jokeText = document.getElementById("jokeText")

const url = "https://api.chucknorris.io/jokes/random"

const fetchJoke = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    jokeText.textContent = data.value;
}

fetchJoke()
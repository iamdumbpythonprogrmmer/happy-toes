async function joke_get_it() {
    const jokes = document.getElementById("joke")
    const set = document.getElementById("set")
    const punch = document.getElementById("punch")
    const res = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await res.json()
    const joke = data.type
    const setup = data.setup
    const answer = data.punchline
    console.log(joke,setup,answer)
    set.textContent = `${setup} `
    punch.textContent = `${answer}`
}
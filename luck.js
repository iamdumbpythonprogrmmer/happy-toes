async function ff() {
    const text = document.getElementById("text")
    const sub = document.getElementById("sub")
    const h1 = document.getElementById("h1")
    const foodi = document.getElementById("foodi")
    const ask = text.value
    var pizza = "pizza"
    const food = document.getElementById("name")
    const recipie = await fetch(`https://dummyjson.com/recipes/search?q=${ask}`)
    foodi.textContent=`error`
    const data = await recipie.json()
    const res= await data.recipes
    const length = res.length
    for (let i = 0; i < length; i++) {
        const myH1 = document.createElement('h1');
        myH1.className = "dynamic-h1"; // Use class instead of duplicate IDs
        myH1.textContent = res[i].name;
        document.body.appendChild(myH1);
        foodi.textContent = res[i].ingredients
    }
    console.log(res)
}
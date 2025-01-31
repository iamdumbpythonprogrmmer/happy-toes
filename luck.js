async function ff() {
    const food = document.getElementById("name")
    food.innerHTML = ""
    const text = document.getElementById("text")
    const foods = document.getElementById("food")
    const sub = document.getElementById("sub")
    const h1 = document.getElementById("h1")
    const ask = text.value
    const place = document.getElementById("foodi")
    var pizza = "pizza"
    const recipie = await fetch(`https://dummyjson.com/recipes/search?q=${ask}`)
    const data = await recipie.json()
    const res= await data.recipes
    if (res.length === 0) {
        food.textContent = "No recipes found.";
        return;
    }
    for (let i = 0; i < length; i++) {
        const myH1 = document.createElement('h1');
        const img = document.createElement('img');
        const myp = document.createElement('pre');
        const reses = document.createElement('pre');
        img.src = res[i].image
        myH1.className = "dynamic-h1";
        reses.textContent = res[i].instructions.join("\n")
        myH1.textContent = res[i].name;//🗿🗿🗿🗿🗿
        myp.textContent = res[i].ingredients;
        img.id = "image"
        food.appendChild(myH1);
        food.append(img)
        food.appendChild(myp)
        food.append(reses)
        
    }
    console.log(res)
}
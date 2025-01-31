async function ff() {
    const food = document.getElementById("name")
    food.innerHTML = ""
    const text = document.getElementById("text")
    const sub = document.getElementById("sub")
    const ask = text.value
    const place = document.getElementById("foodi")
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${ask}`)
    const data = await response.json()
    const res= data.recipes
    if(res.length == 0){
        food.textContent = "404 not found"
    }
    for (let i = 0; i < res.length; i++) {
        const myH1 = document.createElement('h1');
        const img = document.createElement('img');
        const myp = document.createElement('pre');
        const reses = document.createElement('pre');
        img.src = res[i].image
        myH1.className = "dynamic-h1";
        reses.textContent = res[i].instructions.join("\n")
        myH1.textContent = res[i].name;//🗿🗿🗿🗿🗿
        myp.textContent = res[i].ingredients;
        reses.textContent = Array.isArray(res[i].instructions) ? res[i].instructions.join("\n") : res[i].instructions;
        img.id = "image"
        food.appendChild(myH1);
        food.append(img)
        food.appendChild(myp)
        food.append(reses)
        
    }
    console.log(res)
}
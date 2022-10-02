let list = document.getElementById("list"); 
// let img = document.getElementById("imgPokemon"); 
let modal = document.getElementById("modal"); 
let modalInfo = document.getElementById("modalInfo"); 
let info = fetch("https://pokeapi.co/api/v2/pokemon/"); 
info 
  .then(res => { 
    return res.json(); 
  }) 
  .then(({ results }) => { 
    results.forEach(({ url }) => { 
      let infoPok = fetch(url); 
      infoPok 
        .then(res => { 
          return res.json(); 
        }) 
        .then(pokInfo => { 
          // console.log(pokInfo); 
          // console.log(pokInfo.name); 
          // console.log(pokInfo.types[0].type.name); 
          // console.log(pokInfo.height); 
          // console.log(pokInfo.weight); 
          // console.log(pokInfo.sprites.back_default); 
          let li = document.createElement("li"); 
          li.innerText = pokInfo.name; 
          li.style.fontSize = "30px"; 
          li.style.cursor = "pointer"; 
          list.append(li); 
 
          li.addEventListener("click", () => { 
            modal.style.display = "block"; 
 
            let img = document.createElement("img"); 
            img.setAttribute("src", pokInfo.sprites.back_default); 
            img.style.width = "180px"; 
            img.style.height = "180px"; 
            modalInfo.append(img); 
 
            let div_info = document.createElement("div"); 
            div_info.style.width = "250px"; 
            div_info.style.height = "100px"; 
            div_info.innerText = `Name: ${pokInfo.name} 
            Type: ${pokInfo.types[0].type.name} 
            Growth: ${pokInfo.height} 
            The weight: ${pokInfo.weight}`; 
            modalInfo.append(div_info); 
 
            let closeBtn = document.createElement("button"); 
            closeBtn.innerText = "Close"; 
            closeBtn.addEventListener("click", () => { 
              modal.style.display = "none"; 
              modalInfo.innerHTML = ""; 
            }); 
 
            modalInfo.append(closeBtn); 
          }); 
        }); 
    }); 
  });
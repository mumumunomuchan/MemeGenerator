let form = document.querySelector('form');
let container= document.querySelector(".container");

form.addEventListener("submit",handleSubmit);
container.addEventListener("click", handleRemove);

function handleSubmit(e){
    e.preventDefault();

    let imageUrl = e.target.image.value;
    let textTop = e.target.text_top.value;
    let textBottom = e.target.text_bottom.value; 

    console.log(textTop, "text top")
    console.log(imageUrl, "image url")
    console.log(textBottom, "text bottom")

    addMeme(imageUrl, textTop, textBottom);

    e.target.reset();

}

function addMeme(imageUrl, textTop, textBottom){
    let memeRow = document.querySelector(".container > .row");
    let memeWrapper = document.createElement("div");

    memeWrapper.classList.add("memeContainer");
    

    let newMemes = document.createElement("div");
    newMemes.classList.add("meme");
    memeWrapper.appendChild(newMemes);

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    newMemes.appendChild(overlay);
  
    let x = document.createElement("span");
    x.classList.add("oi", "oi-x");
    overlay.appendChild(x);
  
    let pTop = document.createElement("p");
    pTop.classList.add("pTop");
    pTop.innerText = textTop;
    newMemes.appendChild(pTop);
  
    let img = document.createElement("img");
    img.classList.add("img");
    img.src = imageUrl;
    newMemes.appendChild(img);
  
    let pBottom = document.createElement("p");
    pBottom.classList.add("pBottom");
    pBottom.innerText = textBottom;
    newMemes.appendChild(pBottom);

    memeRow.appendChild(memeWrapper);
  
}

function handleRemove(e){
    console.log("Eee",e)
    if (e.target.classList.contains("overlay")) {
       e.target.parentElement.parentElement.remove();

    }
}
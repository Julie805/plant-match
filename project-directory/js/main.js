//Psuedo-code:
// -Visitor may choose one plant to start, or click a "Surprise me!" button that chooses a plant at random. DONE
// -Picked plant (by user or random) returns 4 new plants that are a match.
// -Hero area text updates to say: "You have chosen (plant)! Select as many companion plants as you'd like to add them to your garden:"
// - Picked plants have a heart that is filled in when clicked.
// -Button updates to say "get my garden"
// - After get my garden button is clicked, screen updates to display thumbnails of selections, a message that these are the chosen match, and an updated button to "Start Over." 

const plant = document.querySelector(".plant");
let tomato = document.querySelector(".img-1");
const squash = document.querySelector(".img-2");
const lettuce = document.querySelector(".img-3");
const corn = document.querySelector(".img-4");
const headline = document.querySelector(".headline");
const instructions = document.querySelector(".instructions");
const surprise = document.querySelector(".surprise");
const main = document.querySelector(".main");
//just an empty div to test some things here!



let myPlants =[];

//plants is not currently used... does it work like this??
//const plants = {
  //tomato: ["carrot","basil","onion","celery"],
  //squash: ["corn", "bean", "radish", "pea"],
  //corn:  ["squash", "bean", "pea", "cucumber"],
  ////lettuce: ["onion", "radish","beet", "carrot"]
//};

const imgs = [
  "img/carrot.jpg",
  "img/basil.jpg"
]

//renders the images
function renderImages() {
    let imgsDOM = "";
    for (let i = 0; i < imgs.length; i++) {
      imgsDOM += `<img class="test" src="${imgs[i]}>`
    }
  main.innerHTML= imgsDOM;
}

//When visitor chooses a plant  - works but lists an object instead of an image!
tomato.addEventListener("click", function() {
  choosePlant("tomatoes");
  renderImages()
});

//Sunday additions with parameters... idea is using one function and passing different arguments  
function choosePlant(variety) {
  headline.innerText = `You have chosen to grow ${variety}`
  instructions.innerText = "Select as many companion plants as you'd like to add them to your garden:";

};



//"Surprise me" button that picks a random plant to start. 
surprise.addEventListener("click", function () {
  const keys = Object.keys(plants);
  const randomPlant = keys[Math.floor(Math.random()*keys.length)];
  headline.innerText = `You have chosen to grow ${randomPlant}`;
  instructions.innerText = "Select as many companion plants as you'd like to add them to your garden:";
  myPlants.push(randomPlant);
  console.log(randomPlant);
});



//updates the copyright year in the footer
const copyrightYear = document.querySelector('#copyright-year');
copyrightYear.innerText = new Date().getFullYear();


//Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon //
function hamburger() {
    const links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  };



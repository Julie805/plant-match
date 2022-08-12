//Psuedo-code:
// -Visitor may choose one plant to start, or click a "Surprise me!" button that chooses a plant at random. DONE
// -Picked plant (by user or random) returns 4 new plants that are a match.
// -Hero area text updates to say: "You have chosen (plant)! Select as many companion plants as you'd like to add them to your garden:"
// - Picked plants have a heart that is filled in when clicked.
// -Button updates to say "get my garden"
// - After get my garden button is clicked, screen updates to display thumbnails of selections, a message that these are the chosen match, and an updated button to "Start Over." 

const circle = document.querySelector(".circle");
const container = document.querySelector(".container");

const headline = document.querySelector(".headline");
const subtext = document.querySelector(".subtext");
const surpriseButton = document.querySelector(".surprise");
const startOverButton = document.querySelector(".new-match");
//The "parent plants" to choose from
const tomato = document.querySelector("#tomato");
const squash = document.querySelector("#squash");
const lettuce = document.querySelector("#lettuce");
const corn = document.querySelector("#corn");
//The individual arrays of companion plants
const tomatoMatch = ["carrot", "basil", "onion", "celery"];
const squashMatch = ["corn", "beans", "radishes", "peas"];
const lettuceMatch = ["onions", "radishes", "beets", "carrots"];
const cornMatch = ["squash", "beans", "peas", "cucumbers"];
//Array used by "surprise" me button to pick parent plant
const firstPlants = ["tomato", "squash", "lettuce", "corn"];


//Changes the main text to reflect user's plant choices  
function choosePlant(variety) {
  headline.innerText = `You have chosen to grow ${variety}!`
  subtext.innerText = "Here are the best companion plants to add to your garden:";
};

//Renders the plant matches 
function renderMatch(parentPlant) {
    container.innerHTML= "";
    let plantDOM = "";
    for (let i = 0; i < parentPlant.length; i++) {
      plantDOM += `<p class="circle">${parentPlant[i]}<p>`
    }
    container.innerHTML= plantDOM;
    startOver();
};

//Event Listeners for when user chooses a plant:

tomato.addEventListener("click", function() {
  choosePlant("tomatoes");
  renderMatch(tomatoMatch); 
});

squash.addEventListener("click", function() {
  choosePlant("squash");
  renderMatch(squashMatch);  
});

lettuce.addEventListener("click", function() {
  choosePlant("lettuce");
  renderMatch(lettuceMatch);  
});

corn.addEventListener("click", function() {
  choosePlant("corn");
  renderMatch(cornMatch);  
  console.log(test);
});


//"Surprise me" button that picks a random plant to start - this needs to be refactored. 
surpriseButton.addEventListener("click", function () {
  const keys = Object.keys(plants);
  const randomPlant = keys[Math.floor(Math.random()*keys.length)];
  headline.innerText = `You have chosen to grow ${randomPlant}`;
  subtext.innerText = "Here are the best companion plants to add to your garden:";
  myPlants.push(randomPlant);
  console.log(randomPlant);
});

//Updates button at the bottom of the page
const startOver = function () {
  surpriseButton.classList.add("hide");
  startOverButton.classList.remove("hide");
};

//Resets the page to the starting point -- currently loses the ability to play again ;(
startOverButton.addEventListener("click", function() {
  headline.innerText = "What do I plant with this?";
  subtext.innerText = "Select a plant to reveal its ideal growing companions:"
  container.innerHTML = `
    <p class="circle" id="tomato">Tomato</p>
    <p class="circle" id="squash">Squash</p>
    <p class="circle" id="lettuce">Lettuce</p>
    <p class="circle" id="corn">Corn</p> ";
  `  
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




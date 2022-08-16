//Psuedo-code:
// -Visitor may choose one plant to start, or click a "Surprise me!" button that chooses a plant at random. DONE
// -Picked plant (by user or random) returns 4 new plants that are a match.
// -Hero area text updates to say: "You have chosen (plant)! Select as many companion plants as you'd like to add them to your garden:"
// - Picked plants have a heart that is filled in when clicked.
// -Button updates to say "get my garden"
// - After get my garden button is clicked, screen updates to display thumbnails of selections, a message that these are the chosen match, and an updated button to "Start Over." 

//TROUBLESHOOTING TO-DO's:
//1. After one match is made, and startOverButton is pressed, the layout updates, but none of the plant event listeners are active for a second run. But the "surprise-me" button IS active and can continue functioning. WHY?
//2. Layout issues with buttons moving position (to the left) after click events.
//3. Not able to get items in arrays (like tomatoMatch) to change color in functions. Have tried adding a classList from CSS as well as adding variable.style.background = color
//4. How would this work with images instead of text only?
//5. How would this work on a larger scale?
//6. fix floating/jumpy footer. have not done much with media queries. 
//7. Have not built out pages on hamburger menu. Might delete.

const plant = document.querySelector(".plant");

const container = document.querySelector(".container");

const headline = document.querySelector(".headline");
const subtext = document.querySelector(".subtext");
const surpriseButton = document.querySelector(".surprise");
const startOverButton = document.querySelector(".new-match");

//The "parent plants" to choose from on the homepage
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
const firstPlants = ["tomatoes", "squash", "lettuce", "corn"];

//tomatoMatch.style.background = "#C8B88A";


//Changes the main text to reflect user's plant choices  
function choosePlant(variety) {
  headline.innerHTML = `Matches for <span class="highlight-word">${variety}</span>`
  subtext.innerText = `These are the best companion plants for ${variety} to add to your garden:`;
};

//Renders the plant matches 
function renderMatch(parentPlant) {
    container.innerHTML= "";
    let plantDOM = "";
    for (let i = 0; i < parentPlant.length; i++) {
      plantDOM += `<p class="plant">${parentPlant[i]}<p>`
    }
    container.innerHTML= plantDOM;
    plant.classList.remove("hover-style");
    startOver();
};

//Event Listeners for when user chooses a plant. 

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


//"Surprise me" button that picks a random plant and its corresponding matches. (Is there a way to simplify the conditional statement with another workaround?)
surpriseButton.addEventListener("click", function () {
  const randomPlant = firstPlants[Math.floor(Math.random()*firstPlants.length)];
  headline.innerHTML = `Matches for <span class="highlight-word">${randomPlant}</span>`;
  subtext.innerText = `These are the best companion plants for ${randomPlant} to add to your garden:`;
  plant.style.background = "#C8B88A"; //not working!
  if (randomPlant === "tomato") {
    renderMatch(tomatoMatch)
  } else if (randomPlant === "squash") {
    renderMatch(squashMatch)
  } else if (randomPlant === "lettuce") {
    renderMatch(lettuceMatch)
  } else {
    renderMatch(cornMatch)
  } 
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
    <p class="plant hover-style" id="tomato">Tomato</p>
    <p class="plant hover-style" id="squash">Squash</p>
    <p class="plant hover-style" id="lettuce">Lettuce</p>
    <p class="plant hover-style" id="corn">Corn</p> 
  ` 
  surpriseButton.classList.remove("hide");
  startOverButton.classList.add("hide"); 
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




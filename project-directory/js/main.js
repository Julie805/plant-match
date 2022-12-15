//PROJECT OBJECTIVE: 
//To simplify successful garden planting by finding companion plants.

//FUNCTIONAL OUTLINE:
// -Visitor may choose one plant to start, or click a "Surprise me!" button that chooses a plant at random. 
// -The picked plant (by user or random) returns 4 new plants that are good companion plants (a match). Hero area text also updates to reveal the plant user has chosen.
// -User may find additional plant matches using the "start-over" button, which refreshes the screen back to its first stage.

//TROUBLESHOOTING TO-DO's:

//4. How would this work with images instead of text only?
//6. fix floating/jumpy footer. have not done much with media queries right now. 
//7. Have not built out pages on hamburger menu. Might delete.

//FUTURE WISH LIST:
//1. Instead of buttons, would much prefer photos with labels! Was not able to get this to function in JS in previous versions.
//2. Ability to "heart" and save plants to a "my garden" seciton
//3. More plants :)

import {plantData} from './data.js'

//Main selectors from HTML
const plant = document.querySelector(".plant");
const surpriseButton = document.querySelector(".surprise");
const startOverButton = document.querySelector(".new-match");
const closeModalBtn = document.querySelector('#close-modal-btn')

//Array used by "surprise" me button to pick parent plant

//New code starts here
const matchArray = []

document.addEventListener('click', function(event) {
  if (event.target.dataset.id) {
    getPlantMatches(event.target.dataset.id)
  } else if (event.target.id === 'close-modal-btn') {
    console.log(event.target.id)
    closeMatchModal()
  }
})
//For some reason this event listener causes the first plants to no longer render and the site to break.
//closeModalBtn.addEventListener('click', function() {
 // closeMatchModal()
//})

//this is where you left off... trying a new way to get the modal to close only through the x being selected. Not working because it caused the plants to not render for some reason.

function getPlantMatches(plantId) {
  matchArray.push(plantData.filter(function(match){
    return match.id == plantId  
  })[0])
  renderMatches()
  //below returns the right array!!! Need to rename matchArray, as it is the whole object
  console.log(matchArray[0].matches)
}

function getMatchHtml() {
  let matchHtml = `
  <div class="close-modal-btn-container">
    <p class="close-modal-btn" id="close-modal-btn">X</p>
  </div>
  <h2>♥ Plant matches found!<h2>
  <h3>These are the best companion plants for VARIETY to add to your garden:</h3>
  `
  matchArray[0].matches.forEach(function(match) {
    matchHtml += `<p class="plant">${match}<p>`
  })
  matchHtml += `<button class="button" id="start-over-btn">Start Over</button>`
  return matchHtml  
}


function closeMatchModal () {
  document.querySelector('#match-container').style.display ='none'
  matchArray.length = 0
}


//Displays first plant names
function getPlantHtml() {
  let plantHtml = ''
  plantData.forEach(function(plant) {
    plantHtml += `
      <p class="plant hover-style" data-id="${plant.id}">${plant.name}</p>  
    `
  })
  return plantHtml
}

function renderPlants() {
  document.querySelector('#plant-container').innerHTML = getPlantHtml()
}
renderPlants()

function renderMatches() {
  document.querySelector('#match-container').style.display ='block'
  document.querySelector('#match-container').innerHTML = getMatchHtml()
}


//New code ends here


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

//Updates button at the bottom of the page
const startOver = function () {
  surpriseButton.classList.add("hide");
  startOverButton.classList.remove("hide");
};



//"Surprise me" button that picks a random plant and its corresponding matches. (Is there a way to simplify the conditional statement with another workaround? Would get very long with more plants.)
// surpriseButton.addEventListener("click", function () {
//   const randomPlant = firstPlants[Math.floor(Math.random()*firstPlants.length)];
//   headline.innerHTML = `Matches for <span class="highlight-word">${randomPlant}</span>`;
//   subtext.innerText = `These are the best companion plants for ${randomPlant} to add to your garden:`;
//   plant.style.background = "#C8B88A"; //not working!
//   if (randomPlant === "tomato") {
//     renderMatch(tomatoMatch)
//   } else if (randomPlant === "squash") {
//     renderMatch(squashMatch)
//   } else if (randomPlant === "lettuce") {
//     renderMatch(lettuceMatch)
//   } else {
//     renderMatch(cornMatch)
//   } 
// });


//updates the copyright year in the footer
const copyrightYear = document.querySelector('#copyright-year');
copyrightYear.innerText = new Date().getFullYear();

//Toggle between showing and hiding the navigation menu links when user clicks on the hamburger menu icon
function hamburger() {
    const links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  };




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
//4. Add a 2 sentecne description about planting styles/info

import {plantData} from './data.js'

//New code starts here
const matchArray = []

document.addEventListener('click', function(event) {
  if (event.target.dataset.id) {
    getPlantMatches(event.target.dataset.id)
  } else if (event.target.id === 'close-modal-btn') {
    console.log(event.target.id)
    closeMatchModal()
  } else if (event.target.id ==='start-over-btn') {
    closeMatchModal()
  } else if (event.target.id === 'surprise-btn') {
    getSurprise()
  }
})

//getSurprise is set up to evenutally accept more complex id's from an API and/or using UUIDs. For presnet state, plantIdArray is not needed -- could use the lenght of the plantData object array for the length.

function getSurprise() {
  const plantIdArray = plantData.map(function(plant) {
    return plant.id
  })
  const surpriseId = plantIdArray[Math.floor(Math.random()*plantIdArray.length)]
  getPlantMatches(surpriseId)
}


function getPlantMatches(plantId) {
  matchArray.push(plantData.filter(function(match){
    return match.id == plantId  
  })[0])
  renderMatches()
  //below returns the right array!!! Need to rename matchArray, as it is the whole object
  //console.log(matchArray[0].matches)
}

function getMatchHtml() {
  const variety = matchArray[0].name.toUpperCase()
  let matchHtml = `
  <div class="close-modal-btn-container">
    <p class="close-modal-btn" id="close-modal-btn">X</p>
  </div>
  <h2>♥ Plant matches found!<h2>
  <h3>These are the best companion plants for ${variety} to add to your garden:</h3>
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




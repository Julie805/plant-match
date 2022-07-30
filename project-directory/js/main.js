//Psuedo-code:
// -Visitor may choose one plant to start, or click a "Surprise me!" button that chooses a plant at random.
// -Picked plant (by user or random) returns 4 new plants that are a match.
// -Hero area text updates to say: "You have chosen (plant)! Select as many companion plants as you'd like to add them to your garden:"
// - Picked plants have a heart that is filled in when clicked.
// -Button updates to say "get my garden"
// - After get my garden button is clicked, screen updates to display thumbnails of selections, a message that these are the chosen match, and an updated button to "Start Over." 

const plant = document.querySelector("#plant img");
const tomato = document.querySelector("#tomato");
const squash = document.querySelector("#squash");
const headline = document.querySelector("#headline");
const instructions = document.querySelector("#instructions");


//When visitor chooses a plant ... NOT WORKING:
plant.addEventListener("click", function () {
  headline.innerText = "You have chosen a plant!"
  instructions.innerText = "Select as many companion plants as you'd like to add them to your garden:";
  console.log("test");
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



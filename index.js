/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
 */

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from "./games.js";

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA);

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
 */

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
  // loop over each item in the data
  for (let i = 0; i < games.length; i++) {
    // Retevering the ith game
    const game = games[i];

    // create a new div element, which will become the game card
    const gameCard = document.createElement("div");

    // add the class game-card to the list
    gameCard.classList.add("game-card");

    // set the inner HTML using a template literal to display some info
    // about each game
    // TIP: if your images are not displaying, make sure there is space
    // between the end of the src attribute and the end of the tag ("/>")
    gameCard.innerHTML = `
            <img class="game-img" src="${game.img}" alt ="Cover Image For ${
      game.name
    }" />
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <p><strong>Backers:</strong> ${game.backers.toLocaleString()}</p>
            <p><strong>Pledged:</strong> $${game.pledged.toLocaleString()}</p>
            <p><strong>Goal:</strong> $${game.goal.toLocaleString()}</p>
            <progress value="${game.pledged}" max="${game.goal}"></progress>
        `;

    // append the game to the games-container
    gamesContainer.appendChild(gameCard);
  }
}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games
addGamesToPage(GAMES_JSON);

/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
 */

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalContributions = GAMES_JSON.reduce((acc, back) => {
  return acc + back.backers;
}, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = totalContributions.toLocaleString();

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

const totalPledged = GAMES_JSON.reduce((acc, pledge) => {
  return acc + pledge.pledged;
}, 0);

// set inner HTML using template literal
raisedCard.innerHTML = `$${totalPledged.toLocaleString()}`;

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

const totalGames = GAMES_JSON.reduce((acc, games) => {
  return acc + 1;
}, 0);

gamesCard.innerHTML = totalGames.toLocaleString();

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
 */

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
  deleteChildElements(gamesContainer);

  // use filter() to get a list of games that have not yet met their goal
  const unfundedGames = GAMES_JSON.filter((unfund) => {
    return unfund.pledged < unfund.goal;
  });

  console.log(unfundedGames);
  // use the function we previously created to add the unfunded games to the DOM
  addGamesToPage(unfundedGames);
}

// show only games that are fully funded
function filterFundedOnly() {
  deleteChildElements(gamesContainer);

  // use filter() to get a list of games that have met or exceeded their goal
  const fundedGames = GAMES_JSON.filter((fund) => {
    return fund.pledged >= fund.goal;
  });

  // use the function we previously created to add unfunded games to the DOM
  addGamesToPage(fundedGames);
}

// show all games
function showAllGames() {
  deleteChildElements(gamesContainer);

  // add all games from the JSON data to the DOM
  addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
 */

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
const numUnfunded = GAMES_JSON.reduce((acc, game) => {
  return game.pledged < game.goal ? acc + 1 : acc;
}, 0);

// create a string that explains the number of unfunded games using the ternary operator
const displayStr = `A total of $${totalPledged.toLocaleString()} has been raised for ${GAMES_JSON.length.toLocaleString()} games.
Currently, ${numUnfunded} ${numUnfunded === 1 ? 'game remains' : 'games remain'} unfunded. We need your help to fund these amazing games!`;

// create a new DOM element containing the template string and append it to the description container
const descriptionParagraph = document.createElement("p");
descriptionParagraph.textContent = displayStr;

descriptionContainer.appendChild(descriptionParagraph);

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames = GAMES_JSON.sort((item1, item2) => {
  return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [firstGame, secondGame, ...otherGames] = sortedGames;

// create a new element to hold the name of the top pledge game, then append it to the correct element
const topFundedGame = document.createElement("p");
topFundedGame.textContent = firstGame.name;
firstGameContainer.appendChild(topFundedGame);

// do the same for the runner up item
const secondMostFundedGame = document.createElement("p");
secondMostFundedGame.textContent = secondGame.name;
secondGameContainer.appendChild(secondMostFundedGame);


// Additional Features

// 1. Search Bar

const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();

    const filteredGames = GAMES_JSON.filter(game =>
        game.name.toLowerCase().includes(query)
    );

    deleteChildElements(gamesContainer);
    addGamesToPage(filteredGames);
});

// 2. Back to top button

const backToTopBtn = document.getElementById("back-to-top");

// Show the button when scrolled down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Scroll to top smoothly
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. Night Mode

const toggleBtn = document.getElementById("toggle-dark-mode");

// Load user preference if it exists
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle dark mode on click
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggleBtn.textContent = "🌙 Night Mode";
    }
});

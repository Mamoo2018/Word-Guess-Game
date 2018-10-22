window.onload = function (){

// creating the letters array

        var letters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

// creating the category array

  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements

  var showLives = document.getElementById("myLives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("getHint");
  var showClue = document.getElementById("showClue");

   // creating the letters ul to be used

   var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < letters.length; i++) {
      letters.id = 'letters';
      list = document.createElement('li');
      list.id = 'singleletter';
      list.innerHTML = letters[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

    // Select different catagories

    var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "NFL Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "NBA Teams";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "MLB Teams";
    }
  }

    // Creating the guesses ul
    result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

    // The OnClick Function of the game

    check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }

    // Random word selection based on category selected

    play = function () {
    categories = [
        ["eagles", "patriots", "saints", "falcons", "panthers", "packers", "giants"],
        ["raptors", "celtics", "warriors", "jazz", "pelicans"],
        ["bluejays", "yankees", "astros", "tigers", "brewers"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    //canvas();
  }

  play();

// The hint button function

    hint.onclick = function() {

hints = [
  ["City of brotherly love", "Longest winning streak consisting of regular season and playoff games in NFL history", "The Big Easy", "Hotlanta", "Cam Newtob", "Cheese Heads", "G-Men"],
  ["Toronto", "Boston", "Steph Curry", "Music Genre", "The Brow"],
  ["Only Canadian MLB Team Currently", "Most World Series Titles Won", "2017 World Series Champs", "Detroit", "Named after beer brewing"]
];

var catagoryIndex = categories.indexOf(chosenCategory);
var hintIndex = chosenCategory.indexOf(word);
showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
};


   // Reset the game

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}

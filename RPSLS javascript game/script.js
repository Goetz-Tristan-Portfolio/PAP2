var menuSelection;
var battle = [{
    name: "error",
    beats: []
}, { //1
    name: "rock",
    beats: [3, 4]
}, { //2
    name: "paper",
    beats: [1, 5]
}, { //3
    name: "scissors",
    beats: [2, 4]
}, { //4
    name: "lizard",
    beats: [2, 5]
}, { //5
    name: "spock",
    beats: [1, 3]
}];

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var Log = function(statement) {
    console.log(statement);
    var con = document.getElementById("console");
    con.innerHTML += "<br/>" + statement;
}

var PrintMenu = function() {
    Log("1) Original (RPS)");
    Log("2) New (RPSLS)");
    Log("3) Exit");
};

var GetUserChoice = function() {
    while (true) {
        var input = prompt("Which version would you like to play?");
        if (input === null || input == "3" || input.toLowerCase() == "exit") {
            return 0;
        } else if (input == "1" || input.toLowerCase() == "original" || input.toLowerCase() == "rps") {
            Log("Playing Rock, Paper, Scissors");
            return 3; //Using 3 to account for computer random function
        } else if (input == "2" || input.toLowerCase() == "new" || input.toLowerCase() == "rpsls") {
            Log("Playing Rock, Paper, Scissors, Lizard, Spock");
            return 5; //Using 5 to account for computer random function
        } else {
            Log("Not a valid input");
            PrintMenu();
        }
    }
};

var PlayGame = function(menuSelection) {
    while (true) {
        var userThrows;
        switch (menuSelection) {
            case 3:
                userThrows = prompt("What would you like to throw (Rock, Paper, Scissors, Switch, Exit):");
                break;
            case 5:
                userThrows = prompt("What would you like to throw (Rock, Paper, Scissors, Lizard, Spock, Switch, Exit):");
                break;
        }

        if (userThrows === null || userThrows.toLowerCase() == "exit") {
            return;
        } else if (userThrows.toLowerCase() == "switch") {
            menuSelection = menuSelection == 3 ? 5 : 3;
            Log("Changed to other game");
        } else {
            var found = false;
            for (var userIndex in battle) {
                var choice = battle[userIndex];
                if (userThrows.toLowerCase() == choice.name) {
                    found = true;
                    Log("You threw " + choice.name);
                    var compIndex = Math.floor((Math.random() * menuSelection) + 1);
                    var compThrew = battle[compIndex];
                    Log("Comp threw " + compThrew.name);
                    Compare(userIndex, compIndex);
                }
            }
            if (!found) {
                Log("Not a valid input");
            }
        }
    }
};

var Compare = function(user, comp) {
    if (user == comp) {
        Log("Same result.  Try again.")
    } else {
        var userThrew = battle[user];
        var compThrew = battle[comp];

        if (userThrew.beats.indexOf(comp) != -1) { //beats array contains comp value
            Log("You won! " + userThrew.name.capitalizeFirstLetter() + " beats " + compThrew.name.capitalizeFirstLetter());
        } else { //beats array contains user value
            Log("Comp won! " + compThrew.name.capitalizeFirstLetter() + " beats " + userThrew.name.capitalizeFirstLetter());
        }
    }
};

(function() {
    Log("Welcome to Rock, Paper, Scissors (Lizard, Spock)");
    PrintMenu();
    menuSelection = GetUserChoice();
    if (menuSelection !== 0) {
        PlayGame(menuSelection);
    }
    Log("Have a great day!");
})();
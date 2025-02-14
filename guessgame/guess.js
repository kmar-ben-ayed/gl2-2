function game() {
    var play = true;
    while (play) {
        var nivd = niveaudifficulte();
        var _a = settings(nivd), nbtentative = _a.nbtentative, maxnumb = _a.maxnumb;
        startgame(nbtentative, maxnumb);
        var rejouer = prompt("voulez vous rejouer? oui/non");
        if (rejouer === "non") {
            alert("merci d'avoir joué!");
            play = false;
        }
    }
}
function niveaudifficulte() {
    var nivd = prompt("choisissez le niveau de difficulté: facile/difficile/moyen");
    while (nivd !== "facile" && nivd !== "difficile" && nivd !== "moyen") {
        nivd = prompt("erreur! rechoisissez le niveau de difficulté: facile/difficile/moyen");
    }
    return nivd;
}
function settings(nivd) {
    switch (nivd) {
        case "facile": return { nbtentative: 10, maxnumb: 10 };
        case "difficile": return { nbtentative: 5, maxnumb: 50 };
        case "moyen": return { nbtentative: 2, maxnumb: 100 };
        default: return { nbtentative: 5, maxnumb: 50 };
    }
}
function startgame(nbtentative, maxnumb) {
    var essai = 0;
    var number = Math.floor(Math.random() * maxnumb) + 1;
    while (number > maxnumb || number < 1) {
        number = Math.random();
    }
    for (essai = 0; essai < nbtentative; essai++) {
        var guess = void 0;
        do {
            var input = prompt("Devinez le nombre entre 1 et " + maxnumb);
            if (input === null) {
                alert("Saisie annulée. Entrez un nombre valide.");
                continue;
            }
            guess = parseInt(input, 10);
        } while (isNaN(guess));
        if (guess === number) {
            alert("bravo! vous avez trouvé le nombre en " + (essai + 1) + " essai(s)");
            break;
        }
        else if (guess < number) {
            alert("le nombre est plus grand");
        }
        else {
            alert("le nombre est plus petit");
        }
    }
    if (essai === nbtentative) {
        alert("vous avez perdu! le nombre était " + number);
    }
}
game();

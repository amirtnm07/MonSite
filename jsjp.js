// Variables globales
var secret;
var nbVie = 4;
var modeJeu = ""; // "un" ou "deux"

// Fonction pour le mode 1 joueur
function unJoueur() {
    secret = Math.floor(Math.random() * 10); // Choisir un chiffre entre 0 et 9
    nbVie = 4;
    modeJeu = "un";
    document.getElementById('nbVie').textContent = "Vies restantes : " + nbVie;
    document.getElementById('winner').textContent = "";
    document.getElementById('proposerValeur').style.display = 'inline'; // Affiche le bouton
    document.getElementById('guess').style.display = 'inline'; // Affiche l'input
    document.getElementById('onePlayerBtn').style.display = 'none'; // Cache le bouton 1 joueur
    document.getElementById('twoPlayerBtn').style.display = 'none'; // Cache le bouton 2 joueurs
}

// Fonction pour le mode 2 joueurs
function deuxJoueurs() {
    secret = parseInt(prompt("Joueur 1, entrez un chiffre secret entre 0 et 9 :"));
    if (isNaN(secret) || secret < 0 || secret > 9) {
        alert("Veuillez entrer un chiffre entre 0 et 9 !");
        return;
    }
    nbVie = 4;
    modeJeu = "deux";
    document.getElementById('nbVie').textContent = "Vies restantes : " + nbVie;
    document.getElementById('winner').textContent = "";
    document.getElementById('proposerValeur').style.display = 'inline'; // Affiche le bouton
    document.getElementById('guess').style.display = 'inline'; // Affiche l'input
    document.getElementById('onePlayerBtn').style.display = 'none'; // Cache le bouton 1 joueur
    document.getElementById('twoPlayerBtn').style.display = 'none'; // Cache le bouton 2 joueurs
}

// Fonction pour tester la réponse
function test() {
    var guess = parseInt(document.getElementById('guess').value);
    if (isNaN(guess) || guess < 0 || guess > 9) {
        alert("Veuillez entrer un chiffre entre 0 et 9 !");
        return;
    }

    document.getElementById('nbVie').textContent = "Vies restantes : " + nbVie;

    if (guess === secret) {
        document.getElementById('winner').textContent = "TU AS GAGNÉ ! La valeur à trouver était " + secret;
        document.getElementById('proposerValeur').style.display = 'none';
        document.getElementById('replayBtn').style.display = 'inline';
    } else {
        nbVie--;
        if (nbVie <= 0) {
            document.getElementById('winner').textContent = "TU AS PERDU ! La valeur à trouver était " + secret;
            document.getElementById('proposerValeur').style.display = 'none';
            document.getElementById('replayBtn').style.display = 'inline';
        } else {
            if (guess < secret) {
                document.getElementById('winner').textContent = "Le chiffre est plus grand.";
            } else {
                document.getElementById('winner').textContent = "Le chiffre est plus petit.";
            }
        }
    }
}

// Fonction pour rejouer
function rejouer() {
    document.getElementById('guess').value = '';
    document.getElementById('guess').style.display = 'none';
    document.getElementById('proposerValeur').style.display = 'none';
    document.getElementById('replayBtn').style.display = 'none';
    document.getElementById('nbVie').textContent = "";
    document.getElementById('winner').textContent = "";
    document.getElementById('onePlayerBtn').style.display = 'inline';
    document.getElementById('twoPlayerBtn').style.display = 'inline';
}

let viesJoueur = 3;
let viesOrdi = 3;

function nouveauJeu() {
  viesJoueur = 3;
  viesOrdi = 3;
  document.getElementById("vies").textContent = `Vies Joueur : ${viesJoueur} | Vies Ordi : ${viesOrdi}`;
  document.getElementById("result").textContent = "";
  document.getElementById("imgJoueur").src = "../MonSite/Image/56832.png";
  document.getElementById("imgOrdi").src = "../MonSite/Image/331006.png";
  document.querySelectorAll('.game-buttons').forEach(button => button.disabled = false);
}

function finPartie() {
  document.getElementById("result").textContent = "Partie terminée.";
  document.querySelectorAll('.game-buttons').forEach(button => button.disabled = true);
}

function choisir(choixJoueur) {
  if (viesJoueur === 0 || viesOrdi === 0) {
    document.getElementById("result").textContent = "La partie est déjà terminée. Veuillez commencer un nouveau jeu.";
    return;
  }

  const choixOrdi = ["pierre", "feuille", "ciseaux"][Math.floor(Math.random() * 3)];
  document.getElementById("imgJoueur").src = `../MonSite/Image/${choixJoueur}.jpg`;
  document.getElementById("imgOrdi").src = `../MonSite/Image/${choixOrdi}.jpg`;

  const resultat = comparer(choixJoueur, choixOrdi);
  if (resultat === "gagné") {
    viesOrdi--;
    document.getElementById("result").textContent = "Tu as gagné cette manche !";
  } else if (resultat === "perdu") {
    viesJoueur--;
    document.getElementById("result").textContent = "Tu as perdu cette manche.";
  } else {
    document.getElementById("result").textContent = "Égalité.";
  }

  document.getElementById("vies").textContent = `Vies Joueur : ${viesJoueur} | Vies Ordi : ${viesOrdi}`;

  if (viesJoueur === 0 || viesOrdi === 0) {
    document.getElementById("result").textContent += " Partie terminée.";
    finPartie();
  }
}

function comparer(joueur, ordi) {
  if (joueur === ordi) return "Égalité";
  if (
    (joueur === "pierre" && ordi === "ciseaux") ||
    (joueur === "feuille" && ordi === "pierre") ||
    (joueur === "ciseaux" && ordi === "feuille")
  ) return "gagné";
  return "perdu";
}

nouveauJeu();

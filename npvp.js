const reponses = ["disappear", "clear"];

function verifier() {
  const mot1 = document.getElementById("word1").value.trim().toLowerCase();
  const mot2 = document.getElementById("word2").value.trim().toLowerCase();
  let score = 0;

  if (mot1 === reponses[0]) score++;
  if (mot2 === reponses[1]) score++;

  document.getElementById("resultat").innerText =
    `Tu as trouvé ${score} mot(s) sur 2 !`;
}

function afficherSolutions() {
  document.getElementById("word1").value = reponses[0];
  document.getElementById("word2").value = reponses[1];
  document.getElementById("resultat").innerText =
    "Voici les bonnes réponses ! Essaie encore pour t'entraîner 🎶";
}

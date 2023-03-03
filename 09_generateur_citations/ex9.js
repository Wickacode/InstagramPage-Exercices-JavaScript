// Tableau des citations stockées sous forme de chaînes de caractères
const citations = [
  "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez. - Albert Schweitzer",
  "Le travail acharné bat le talent quand le talent ne travaille pas dur. - Tim Notke",
  "La persévérance est la clé de la réussite. - Charles Chaplin",
  "La réussite n'est pas définitive, l'échec n'est pas fatal : c'est le courage de continuer qui compte. - Winston Churchill",
  "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
  "Le travail acharné bat tout. - Benjamin Franklin",
  "Le succès ne vient pas à vous, vous devez aller le chercher. - Marva Collins",
  "Il n'y a pas de raccourci vers n'importe où qui en vaille la peine. - Beverly Sills",
  "Il n'y a pas de limites à ce que vous pouvez accomplir, sauf les limites que vous vous imposez. - Les Brown",
  "La réussite en affaires nécessite de la formation et de la discipline et de travailler dur. Mais si vous n'êtes pas effrayé par ces choses, les opportunités sont tout simplement incroyables. - Richard Branson",
];

// Cette fonction génère une citation aléatoire à partir du tableau "citations"
function genererCitation() {
  const citation = citations[Math.floor(Math.random() * citations.length)];
  return citation;
}

// Cette fonction récupère une citation aléatoire générée par la fonction "genererCitation" et l'affiche dans la page HTML
function afficherCitation() {
  const citation = genererCitation();
  const citationDiv = document.getElementById("citation");
  citationDiv.innerHTML = citation;
}
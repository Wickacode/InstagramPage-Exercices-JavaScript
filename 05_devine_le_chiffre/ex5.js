// Titre : Devine le chiffre
// Challenge : Programme un mini jeu avec un numéro secret aléatoire à trouver. 
//Affiche le nombre de coups effectués lorsque le chiffre a été trouvé, ainsi que l'historique des coups.

//Correction :

// Déclaration et initialisation d'une variable "chiffreFinal" contenant un nombre aléatoire entre 1 et 100 (inclus).
var chiffreFinal = Math.floor(Math.random() * 100) + 1;

// Déclaration et initialisation d'une variable "numberTry" représentant le nombre de tentatives de l'utilisateur.
var numberTry = 0;

// Définition d'une fonction "verificationChiffre" qui prend en paramètre l'élément HTML du formulaire "coupSubmit".
function verificationChiffre(coupSubmit) {
  // Récupération de la valeur entrée par l'utilisateur et conversion en nombre entier.
  var valeurpropose = parseInt(coupSubmit.value);
  // Si la valeur n'est pas un nombre, affichage d'un message d'erreur et retour de la fonction.
  if (isNaN(valeurpropose)) {
    document.getElementById("result").innerHTML =
      "La valeur proposée doit être un nombre!";
    return false;
  }
  // Incrémentation du nombre de tentatives.
  numberTry++;
  // Si la valeur proposée est inférieure au chiffre aléatoire, affichage d'un message indiquant que le nombre à trouver est plus grand.
  if (valeurpropose < chiffreFinal) {
    document.getElementById("result").innerHTML =
      "Le nombre à trouver est plus grand";
  // Si la valeur proposée est supérieure au chiffre aléatoire, affichage d'un message indiquant que le nombre à trouver est plus petit.
  } else if (valeurpropose > chiffreFinal) {
    document.getElementById("result").innerHTML =
      "Le nombre à trouver est plus petit";
  // Si la valeur proposée est égale au chiffre aléatoire, affichage d'un message de félicitations indiquant le nombre de tentatives nécessaires pour trouver la solution.
  } else {
    document.getElementById("result").innerHTML =
      "Tu as trouvé la solution en " + numberTry + " coups";
  }
  // Récupération de l'élément HTML correspondant à l'historique des propositions et ajout de la valeur proposée à la suite des précédentes propositions.
  var historyDiv = document.getElementById("history");
  historyDiv.innerHTML += valeurpropose + " / ";

  // Effacement du contenu de l'élément HTML correspondant à la zone de saisie et mise en focus de cette zone.
  coupSubmit.value = "";
  coupSubmit.focus();

  // Retour de la fonction.
  return false;
}
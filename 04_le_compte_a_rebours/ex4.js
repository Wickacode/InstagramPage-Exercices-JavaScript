// Titre : Le compte à rebours
// Challenge : Un simple compte à rebours, stressant.

//Correction :

// Définition d'une fonction "startTimer".
function startTimer() {
  // Définition d'une variable "countDownDate" qui contient la date et l'heure actuelles + 1 minute (60000 millisecondes).
  var countDownDate = new Date().getTime() + 60000; // 60000 ms = 1 min
  // Définition d'un intervalle de temps (toutes les 1000 millisecondes) qui exécute une fonction anonyme.
  var x = setInterval(function() {
    // Définition d'une variable "now" qui contient la date et l'heure actuelles.
    var now = new Date().getTime();
    // Calcul de la différence entre la date de fin du compte à rebours et la date actuelle.
    var distance = countDownDate - now;
    // Calcul du nombre de minutes restantes.
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // Calcul du nombre de secondes restantes.
    var secondes = Math.floor((distance % (1000 * 60)) / 1000);
    // Affichage du temps restant dans un élément HTML.
    document.getElementById("compteRebours").innerHTML = minutes + "m " + secondes + "s ";
    // Si le temps est écoulé, arrêt de l'intervalle de temps et affichage d'un message indiquant que le temps est écoulé.
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("compteRebours").innerHTML = "Temps écoulé!";
    }
  }, 1000);
}

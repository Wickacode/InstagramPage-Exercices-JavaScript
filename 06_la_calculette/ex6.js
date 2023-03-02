// Titre : La calculette
// Challenge : Crée une calculatrice, vite fait bien fait

//Correction :

// Définition d'une fonction appelée "calculate"
function calculate() {
    // Récupération de l'élément HTML avec l'ID "result" et stockage dans la variable "result"
    var result = document.getElementById("result");
    // Évaluation de la chaîne de caractères contenue dans la zone de texte et affichage du résultat
    result.value = eval(result.value);
  }
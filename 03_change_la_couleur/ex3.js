// Titre : Change la couleur
// Challenge : Change la couleur du frond d'écran de ta page aléatoirement en cliquant sur un bouton.

//Correction :

// Définition d'une fonction "changeColor".
function changeColor() {
  // Définition de trois variables "r", "g" et "b" qui contiennent chacune une valeur aléatoire entre 0 et 255.
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  // Concaténation des trois valeurs aléatoires pour former une couleur RGB.
  var couleur = "rgb(" + r + ", " + g + ", " + b + ")";
  // Modification de la couleur de fond de la page en utilisant la couleur RGB générée.
  document.body.style.backgroundColor = couleur;
}

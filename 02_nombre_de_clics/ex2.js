// Titre : Le nombre de clic
// Challenge : Créer une fonction permettant de compter le nombre de clic sur un bouton. Affiche le résultat en temps réel.

//Correction :

// Sélectionne le bouton
const bouton = document.querySelector("#btn");

// Sélectionne l'élément qui affiche le nombre de clics
const affichageClics = document.querySelector("#nb-clic");

// Initialise le compteur de clics
let compteurClics = 0;

// Ajoute un écouteur d'événements sur le bouton
bouton.addEventListener("click", () => {
  // Incrémente le compteur de clics
  compteurClics++;

  // Met à jour l'affichage du nombre de clics
  affichageClics.textContent = `Le bouton a été cliqué ${compteurClics} fois.`;
});
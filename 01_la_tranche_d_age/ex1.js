// Titre : La tranche d'âge 
// Challenge : Ce soir c'est soirée films. Décide qui peut regarder quoi selon la tranche d'âge des personnes.

//Correction 

// Demande à l'utilisateur son âge et le convertit en un nombre entier
let age = parseInt(prompt('Quel est ton âge ?'));

// Crée un tableau d'objets avec des films et leurs âges minimum requis
let filmsParAge = [
  { age: 6, film: 'Ratatouille' },
  { age: 12, film: 'Shaolin Soccer' },
  { age: 17, film: 'Retour vers le futur' },
  { age: 130, film: 'ce que tu veux' },
];

// Trouve le premier film pour lequel l'âge de l'utilisateur est suffisant
let filmAutorise = filmsParAge.find(({ age: limiteAge }) => age <= limiteAge);

// Si un film a été trouvé, affiche son nom dans une boîte de dialogue
if (filmAutorise) {
  alert(`Tu peux regarder "${filmAutorise.film}"`);
} else {
  // Sinon, affiche un message d'erreur
  alert('Erreur !!');
}
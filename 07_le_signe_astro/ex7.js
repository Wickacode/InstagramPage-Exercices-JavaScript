// Titre : Le signe astro
// Challenge : Trouve le signe astrologique d'un utilisateur avec sa date de naissance

//Correction :

// Cette fonction est appelée lorsqu'un formulaire est soumis pour calculer le signe astrologique de l'utilisateur.
function calculateSign() {
  // Récupérer la valeur de l'élément d'entrée de date de naissance dans le formulaire.
  const birthdate = document.getElementById("birthdate").value;

  // Créer un tableau contenant les noms de tous les signes astrologiques.
  const signNames = [
    "Capricorne",
    "Verseau",
    "Poissons",
    "Bélier",
    "Taureau",
    "Gémeaux",
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
  ];

  // Créer un tableau contenant les plages de dates pour chaque signe astrologique.
  const signDates = [
    "01/01-19/01",
    "20/01-18/02",
    "19/02-20/03",
    "21/03-19/04",
    "20/04-20/05",
    "21/05-21/06",
    "22/06-22/07",
    "23/07-22/08",
    "23/08-22/09",
    "23/09-22/10",
    "23/10-21/11",
    "22/11-31/12",
  ];

  // Extraire le mois et le jour de naissance de l'utilisateur à partir de la valeur de date de naissance.
  const birthMonth = parseInt(birthdate.substr(5, 2));
  const birthDay = parseInt(birthdate.substr(8, 2));

  // Initialiser l'indice du signe astrologique à une valeur non définie.
  let signIndex;

  // Boucler sur toutes les plages de dates pour chaque signe astrologique.
  for (let i = 0; i < signDates.length; i++) {
    // Extraire les dates de début et de fin de chaque plage de dates pour chaque signe astrologique.
    const signRange = signDates[i].split("-");
    const startMonth = parseInt(signRange[0].substr(3, 2));
    const startDay = parseInt(signRange[0].substr(0, 2));
    const endMonth = parseInt(signRange[1].substr(3, 2));
    const endDay = parseInt(signRange[1].substr(0, 2));

    // Vérifier si la date de naissance de l'utilisateur est comprise dans la plage de dates actuelle pour le signe astrologique.
    if (
      (birthMonth === startMonth && birthDay >= startDay) ||
      (birthMonth === endMonth && birthDay <= endDay) ||
      (birthMonth > startMonth && birthMonth < endMonth)
    ) {
      // Si la date de naissance de l'utilisateur est comprise dans la plage de dates actuelle, enregistrer l'indice du signe astrologique.
      signIndex = i;
      break;
    }
  }

  // Extraire le nom du signe astrologique correspondant à l'indice enregistré.
  const signName = signNames[signIndex];

  // Afficher le résultat dans un élément HTML.
  document.getElementById("result").innerHTML =
    "Ton signe astrologique est " + signName + ". ";
}

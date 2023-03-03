function generateQR() { // Définition de la fonction qui va générer le QR code
    var qrdata = document.getElementById("qrdata").value; // Récupération des données entrées par l'utilisateur
    var typeNumber = 0; // Définition du type de QR code à générer
    var errorCorrectionLevel = "H"; // Définition du niveau de correction d'erreur
    var qr = qrcode(typeNumber, errorCorrectionLevel); // Création de l'objet QR code
    qr.addData(qrdata); // Ajout des données au QR code
    qr.make(); // Génération du QR code
    document.getElementById("qrcode").innerHTML = qr.createImgTag(); // Affichage du QR code sur la page HTML
  }
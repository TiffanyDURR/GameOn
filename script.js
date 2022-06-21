let iconMenu = document.querySelector(".icon-menu");
let menuMobile = document.querySelector(".menu-mobile");
let inscription = document.querySelector(".inscription");
let inscriptionMobile = document.querySelector(".inscriptionMobile");
let modal = document.querySelector(".modal");
let modalContainer = document.querySelector(".modal-container");
let close = document.getElementById("close");
let fermer = document.querySelector(".fermer");
let submit = document.getElementById("submit");
let modalContent = document.getElementById("modal-content");
let validation = document.getElementById("validation");

// ELEMENTS VISUELS

close.addEventListener("click", () => {
  // Au click sur la croix
  modalContainer.classList.toggle("modal-container-hidden");
  // Le formulaire se ferme
  document.location.reload(true);
  // Recharge la page
});

fermer.addEventListener("click", () => {
  modalContainer.classList.toggle("modal-container-hidden");
  document.location.reload(true);
});

iconMenu.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-mobile-visible");
  // Au click sur l'icone du menu
  // Affiche le menu déroulant
});

inscription.addEventListener("click", () => {
  // Au click sur le bouton "inscription"
  modal.classList.add("modal-visible");
  modalContainer.classList.add("modal-container-visible");
  // Affiche le formulaire d'inscription
});

inscriptionMobile.addEventListener("click", () => {
  modal.classList.add("modal-visible");
  modalContainer.classList.add("modal-container-visible");
  document.documentElement.scrollTop = 0;
});

// ------------------------------------------------------------------------------------------------------------------------------------------------
// FONCTIONS FORMULAIRE

// Identification des différents inputs du formulaire
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="radio"], input[type="date"], input[type="checkbox"]'
);
// console.log(inputs); -> Tous les éléments sont bien identifiés.
// Identification de l’input sélectionné par l’utilisateur.

const form = document.querySelector("form");
// Formulaire

let lieu = document.querySelector('input[name="lieu"]:checked').value;
// Buttons "lieux"

let prenom, nom, email, date, tournois;

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // Tester la valeur de e.target.id
    switch (e.target.id) {
      // En fonction de la valeur trouvée, la fonction « checker » correspondante sera jouée.
      // L'evenement sera déclenché en fonction de la valeur de target.id de l'input.
      case "prenom":
        prenomChecker(e.target.value);
        break;
      // Fin de l'instruction pour "prenom".
      case "nom":
        nomChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "date":
        dateChecker(e.target.value);
        break;
      case "tournois":
        tournoisChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

// Fonctions permettant de contrôler la validité du contenu des inputs ;

const prenomChecker = (value) => {
  // La fonction a besoin d'analyser "value".
  // console.log(value); -> La valeur de "input" est bien récupérée dans la console.
  const prenomContainer = document.querySelector(".prenom-container");
  let errorDisplay = document.querySelector(".prenom-container > span");

  if (value.length > 0 && (value.length < 3 || value.length > 30)) {
    // Condition si ;
    // le prénom est supérieur à 0 caractère (pas de message d’erreur si aucune entrée)
    // ET inférieur à 3 caractères.
    // OU que sa value.length est supérieure à 30 caractères.
    // Il y a une erreur.
    prenomContainer.classList.add("error");
    // Changement de style CSS en rouge.
    // Indicateur visuel pour l'erreur.
    errorDisplay.textContent =
      "Votre prénom doit faire entre 3 et 30 caractères.";
    // Message de l'erreur qui s'affiche dans ".prenom-container > span".
    prenom = null;
  } else if (!value.match(/^[A-zÀ-ú-]*$/)) {
    // !value.match -> Indique que si les caractères entrés dans l'input ne correspondent pas aux REGEX prédéfinis.
    prenomContainer.classList.add("error");
    errorDisplay.textContent = "Ne peut pas contenir de caractères spéciaux.";
    // Message d'erreur car utilisation de caractères spéciaux.
    prenom = null;
  } else {
    prenomContainer.classList.remove("error");
    // Si toutes les conditions sont remplies
    // Le style "error" est enlevé.
    errorDisplay.textContent = "";
    // Plus d'affichage du message d'erreur.
    prenom = value;
    // prenom = value -> Permet de stocker l'information.
  }
};

const nomChecker = (value) => {
  const nomContainer = document.querySelector(".nom-container");
  let errorDisplay = document.querySelector(".nom-container > span");
  if (value.length > 0 && (value.length < 3 || value.length > 30)) {
    nomContainer.classList.add("error");
    errorDisplay.textContent = "Votre nom doit faire entre 3 et 30 caractères.";
    nom = null;
  } else if (!value.match(/^[A-zÀ-ú-]*$/)) {
    nomContainer.classList.add("error");
    errorDisplay.textContent = "Ne peut pas contenir de caractères spéciaux.";
    nom = null;
  } else {
    nomContainer.classList.remove("error");
    errorDisplay.textContent = "";
    nom = value;
  }
};

const emailChecker = (value) => {
  const emailContainer = document.querySelector(".email-container");
  let errorDisplay = document.querySelector(".email-container > span");
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    emailContainer.classList.add("error");
    errorDisplay.textContent = "Format de l'adresse e-mail non valide.";
    email = null;
  } else {
    emailContainer.classList.remove("error");
    errorDisplay.textContent = "";
    email = value;
  }
};

const dateChecker = (value) => {
  const dateContainer = document.querySelector(".date-container");
  let errorDisplay = document.querySelector(".date-container > span");
  if (!value.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i)) {
    dateContainer.classList.add("error");
    errorDisplay.textContent =
      "Saisir une date de naissance au format jj-mm-aaaaa";
    date = null;
  } else {
    dateContainer.classList.remove("error");
    errorDisplay.textContent = "";
    date = value;
  }
};

const tournoisChecker = (value) => {
  const tournoisContainer = document.querySelector(".tournois-container");
  let errorDisplay = document.querySelector(".tournois-container > span");
  if (value.length > 0 && (value.length < 1 || value.length > 2)) {
    tournoisContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez indiquer un chiffre entre 0 et 99.";
    tournois = null;
  } else if (!value.match(/^[0-9]*$/)) {
    tournoisContainer.classList.add("error");
    errorDisplay.textContent = "Seul les chiffres sont autorisés.";
    tournois = null;
  } else {
    tournoisContainer.classList.remove("error");
    errorDisplay.textContent = "";
    tournois = value;
  }
};

form.addEventListener("submit", (e) => {
  let errorEmpty = document.querySelector(".empty");
  e.preventDefault();
  // Éviter le rechargement de la page lors de la soumission du formulaire
  if (prenom && nom && email && date && tournois && conditions.checked) {
    const data = {
      prenom,
      nom,
      email,
      date,
      tournois,
      lieu,
    };
    // Tous les éléments sont regroupés dans l'objet "data"

    console.log(data);
    // Test de l'envoie de l'objet

    inputs.forEach((input) => (input.value = ""));
    // Vide les inputs après envoie du formulaire.

    prenom = null;
    nom = null;
    email = null;
    date = null;
    tournois = null;
    // Empêche le renvoie du formulaire en boucle
    modalContent.style.visibility = "hidden";
    // Si tout est okay, masque le formulaire
    validation.style.visibility = "visible";
    // Et affiche "Merci pour votre inscription"
  }
  if (!conditions.checked) {
    const conditionsContainer = document.querySelector(".conditions-container");
    let errorDisplay = document.querySelector(".conditions-container > span");
    conditionsContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez accepter les conditions d'utilisation.";
  }
  if (conditions.checked) {
    const conditionsContainer = document.querySelector(".conditions-container");
    let errorDisplay = document.querySelector(".conditions-container > span");
    conditionsContainer.classList.remove("error");
    errorDisplay.textContent = "";
  } else {
    errorEmpty.textContent = "Veuillez compléter le formulaire.";
  }
});

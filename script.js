 // Récupération des éléments HTML pour le bouton ajout clients
const clickButton = document.getElementById("clickButton10");
const clickButton5 = document.getElementById("clickButton5");
const clickCount = document.getElementById("clickCount");
//mettre le localstorage comme nombre de base au compteur
clickCount.textContent = localStorage.getItem('compteur');
 // Récupération des éléments HTML pour le bouton l'historique des clients
const historiqueText = document.getElementById("afficheHistorique");
//mettre le localstorage comme nombre de base à l'ajout clients
historiqueText.innerHTML = localStorage.getItem('historiqueClient');

// Initialisation du compteur
let counter = Number(clickCount.textContent)

// Fonction qui incrémente le compteur de 10 et met à jour le texte affiché
function Ajout10 () {
  clickCount.textContent = (counter += 10);
  localStorage.setItem('compteur', clickCount.textContent)
  historiqueText.innerText += '\n +10€ Client';
  localStorage.setItem('historiqueClient', historiqueText.innerText)
  location.reload()
}

function Ajout5 () {
    clickCount.textContent = (counter += 5);
    localStorage.setItem('compteur', clickCount.textContent)
    historiqueText.innerText += '\n +5€ Client';
    localStorage.setItem('historiqueClient', historiqueText.innerText)
    location.reload()
}


// Ajout d'un écouteur d'événement pour détecter les clics sur le bouton
clickButton.addEventListener("click", Ajout10);
clickButton5.addEventListener("click", Ajout5);

const titreDepenses =  document.getElementById("depenses");
const prixDepenses = document.getElementById("prix");
const forumaireDépensesSubmit = document.getElementById("formulaire");
const depenseTotal = document.getElementById("depenseTotal");

forumaireDépensesSubmit.addEventListener("submit", formulaireDepenses);
depenseTotal.innerText = localStorage.getItem('historiqueDepenses');

let afficheHistoriqueDepenses = document.getElementById("afficheHistoriqueDepenses")
afficheHistoriqueDepenses.innerHTML = localStorage.getItem('HistoriqueDepenses')
const totalNet = document.getElementById("totalNet");

function formulaireDepenses (e) {
    e.preventDefault()
    let NumberDepenseTotal = Number(depenseTotal.innerText)
    let NumberPrixDepenses = Number(prixDepenses.value)
    const localDepenses = NumberDepenseTotal += NumberPrixDepenses
    const formlaireStorage =  localStorage.setItem('historiqueDepenses',  localDepenses)
    afficheHistoriqueDepenses.innerHTML += "\n-" + prixDepenses.value + "€" + " " + titreDepenses.value
    localStorage.setItem('HistoriqueDepenses', afficheHistoriqueDepenses.innerHTML)
    location.reload()
}

totalNet.innerHTML = localStorage.getItem('compteur') - localStorage.getItem('historiqueDepenses')

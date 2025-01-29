let currentDivId = 'tout'; // Initialize current div ID

// function onMouseOver() {
//     this.style.fontWeight = 'bold'; // Bold when mouse hovers over the text
// }

// function onMouseOut() {
//     this.style.fontWeight = 'normal'; // Reset font weight when mouse moves away
// }

function onClick(clickedDiv) { //currentDiv is for the content (contenu)

    //on definie la div actuelle 
    const nomPage = document.getElementById(clickedDiv + '-page');
    const contenuPage = document.getElementById('contenu-' + clickedDiv + '-projets');

    // Removing event listeners from the previously clicked button
    // comme ca tout revient à la normale
    // const previousButton = document.getElementById('bouton-' + currentDivId);
    // previousButton.removeEventListener('mouseover', onMouseOver);
    // previousButton.removeEventListener('mouseout', onMouseOut);

    // Hiding current div
    document.getElementById('contenu-' + currentDivId + '-projets').style.display = 'none';
    document.getElementById(currentDivId + '-page').style.backgroundColor = 'rgb(144, 144, 144)'; // blanc background
    document.getElementById('bouton-' + currentDivId).style.fontWeight = 'normal'; // on enleve le gras de la police


    // Showing corresponding div
    contenuPage.style.display = 'flex'; // on affiche le contenu de la nouvelle page 
    nomPage.style.backgroundColor = 'rgb(82, 149, 151)'; // bleu background
    document.getElementById('bouton-' + clickedDiv).style.fontWeight = 'bold';



    // Update current div ID
    currentDivId = clickedDiv;

    // Adding event listeners to the newly clicked button
    // It has to be under  : currentDivId = clickedDiv; to be sure it is apply to the new current bouton
    // const currentButton = document.getElementById('bouton-' + currentDivId);
    // currentButton.style.fontWeight = 'bold';
    // currentButton.addEventListener('mouseover', onMouseOver);
    // currentButton.addEventListener('mouseout', onMouseOut);
}

// Attach event listeners for mouseover and mouseout outside the onClick function
//pour ne pas qu'elle soit appeler uniquement lorsqu'on clique sur le texte



// 1er version 
// let currentDivId = 'tout'; // Initialize current div ID

// function onClick(clickedDiv) { //currentDiv is for the content (contenu)
//     //on definie la div actuelle 

//     const nomPage = document.getElementById(clickedDiv + '-page');
//     const contenuPage = document.getElementById('contenu-' + clickedDiv + '-projets');


//     // Hiding current div
//     document.getElementById('contenu-' + currentDivId + '-projets').style.display = 'none';
//     document.getElementById(currentDivId + '-page').style.backgroundColor = 'rgb(144, 144, 144)'; // blanc background
//     document.getElementById('bouton-' + currentDivId).style.fontWeight = 'normal'; // on enleve le gras de la police


//     // Showing corresponding div
//     contenuPage.style.display = 'flex'; // on affiche le contenu de la nouvelle page 
//     nomPage.style.backgroundColor = 'rgb(82, 149, 151)'; // bleu background
//     document.getElementById('bouton-' + clickedDiv).style.fontWeight = 'bold';


//     // Update current div ID
//     currentDivId = clickedDiv;


// }
// // Attach event listeners for mouseover and mouseout outside the onClick function
// //pour ne pas qu'elle soit appeler uniquement lorsqu'on clique sur le texte
// window.addEventListener('load', function() {
//     document.getElementById('bouton-' + currentDivId).addEventListener('mouseover', function() {
//         this.style.fontWeight = 'bold'; // Bold when mouse hovers over the text
//     });

//     document.getElementById('bouton-' + currentDivId).addEventListener('mouseout', function() {
//         if (currentDivId !== this.id.split('-')[1]) { // Check if the mouse is not over the clicked element
//             this.style.fontWeight = 'normal'; // Reset font weight when mouse moves away
//         }
//     });
// });
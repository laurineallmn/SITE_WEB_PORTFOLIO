//POUR LE DEFILEMENT DE PHOTO
//PAGE 1
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    // let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
    // captionText.style.fontSize = '2vw';
}

//PAGE 2
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("demo");
    // let captionText = document.getElementById("caption");
    if (n > slides2.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
    // captionText.innerHTML = dots2[slideIndex2 - 1].alt;
    // captionText.style.fontSize = '2vw';
}


////////////////////////////////////////////////////
//POUR LES INTERCALAIRES DE TYPES PROJETS
////////////////////////////////////////////////////

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
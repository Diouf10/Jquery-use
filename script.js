
/** ------------------- Sélectionner un élément ------------------- */

// avec Javascript
document.querySelector('h1');
document.querySelectorAll('p');

// avec jQuery
$('h1'); // on donne le sélecteur CSS
$('p'); // on sélectionne tous les paragraphes



/** ------------------- Modifier le contenu d'un élément ------------------- */

// avec Javascript
document.querySelector('h1').textContent = 'Nouveau titre';

document.querySelectorAll('p').forEach(function (p) {
    p.textContent = 'Nouveau paragraphe';
});

document.querySelector('.maClasse').innerHTML = '<strong>Texte en gras</strong>';


// avec jQuery
$('h1').text('Nouveau titre');
$('p').text('Nouveau paragraphe'); // on modifie le texte de tous les paragraphes
$('.maClasse').html('<strong>Texte en gras</strong>'); // on modifie le contenu HTML de l'élément


/** ------------------- Modifier le style d'un élément ------------------- */

// avec Javascript

document.querySelector('h1').style.color = 'red';
// document.querySelector('#monID').className = 'important';    // avec javascript one peut pas supprimer une classe
// document.querySelectorAll('p').style.color = 'blue'; // Ne fonctionne pas car querySelectorAll renvoie une liste d'éléments


// avec jQuery
$('h1').css('color', 'red');
$('#monID').addClass('important');
$('#monID').removeClass('important');
$('p').css('color', 'blue'); // on modifie la couleur de tous les paragraphes


/** ------------------- Ajouter et supprimer un élément ------------------- */

// avec Javascript
document.querySelector('h1').prepend('Texte avant'); // ajoute du texte avant le contenu de l'élément
document.querySelector('h1').append('Texte après'); // ajoute du texte après le contenu de l'élément

// avec jQuery
$('h1').prepend('Texte avant');
$('h1').append('Texte après');

$('h1').before('<p>Texte avant</p>'); // ajoute un élément avant l'élément
$('h1').after('<p>Texte après</p>'); // ajoute un élément après l'élément

$('p').remove(); // supprime l'élément


/** ------------------- Modifier les attributs d'un élément ------------------- */

// avec Javascript
document.querySelector('h1').setAttribute('class', 'important'); // ajoute un attribut class à l'élément
document.querySelector('h1').setAttribute('style', 'text-transform: uppercase'); // ajoute un attribut style à l'élément

// avec jQuery
$('h1').attr('class'); // renvoie la valeur de l'attribut class
$('h1').attr('style', 'text-transform: uppercase'); // ajoute un attribut style à l'élément

$('h1').after('<a href="https://google.com">Lien</a>'); // ajoute un lien après le titre
$('a').attr('target', '_blank'); // ajoute l'attribut target="_blank" au lien



/** ------------------- Ajouter des événements ------------------- */

// avec Javascript
document.querySelector('h1').addEventListener('click', function () {
    document.querySelector('h1').style.color = 'red';
});

// avec jQuery

//pour un event
$('h1').addEvent('click', function () {}); 

// pour click
$('h1').click(function () {
    $('h1').css('color', 'red');
});

$('body').after('<p>Cliquez sur le paragraphe pour changer la couleur du titre</p>');  // ajoute un paragraphe après le body
$('body').after('<p>Cliquez sur le paragraphe pour changer la couleur du titre</p>');  // ajoute un paragraphe après le body


// pas besoin de boucle pour ajouter un événement à plusieurs éléments
$('p').click(function () { 
    $('h1').css('color', 'blue'); 
});

$('h1').on('mouseover', function () {
    $('p').css('color', 'green');
});

$('h1').on('mouseout', function () {
    $('p').css('color', 'black');
});



/** ------------------- Faire des requête AJAX ------------------- */

const url = 'https://blockchain.info/ticker';

// avec Javascript

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('h1').textContent = data.EUR.last;
    })
    .catch(function (error) {
        console.log(error);
    });


// avec jQuery
$.ajax({ 
    url: url, 
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        $('h1').text(data.EUR.last);
    },

    error : function (error) {
        console.log(error);
    }
});




// ***** 2e exemple

const url_bis = 'https://lesoublisdelinfo.com/api.php';


// avec jQuery
$.ajax({ 
    url: url_bis, 
    type: 'POST',
    data: { prenom: 'Jean' },
    dataType: 'json',
    success: function (data) {
        console.log(data);
        $('p:first').text(data.resultat);
    },

    error : function (error) {
       alert('Merci de revenir plus tard');
    }
});


/** ------------------- Animations ------------------- */

// avec jQuery
//$('h1').hide(); // masque l'élément
//$('h1').show(); // affiche l'élément
//$('h1').toggle(); // masque ou affiche l'élément en fonction de son état actuel

$('p').click(() => {
    //$('h1').toggle('slow'); // masque ou affiche l'élément avec une animation de 600ms
    //$('h1').toggle('fast'); // masque ou affiche l'élément avec une animation de 200ms
    //$('h1').fadeToggle(); // masque ou affiche l'élément avec une animation de fondu
    //$('h1').slideToggle(); // masque ou affiche l'élément avec une animation de défilement

    //$('h1').animate({ fontSize: '3em' }, 1000); // anime la taille de la police de caractères

    $('h1').slideUp().slideDown().animate
});


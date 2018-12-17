/*Carousel */

/*Deroulement automatique */
//on définit l'index du slider a 0 au lancement de la page puis on appel la fonction carrousel
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    //On récupere l'ensemble de nos sliders
    var x = document.getElementsByClassName("mySlides");
    //Pour chacun de nos slider on applique display=none pour cacher le slider
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    //on incrémente slideIndex de +1
    slideIndex++;
    //Si la nouvelle valeur de slideIndex est superieur au nombre total de slider on repasse l'index à 1
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    //Pour le slider numéroté slideIndex-1 on applique le style block pour l'afficher
    x[slideIndex - 1].style.display = "block";
    //on rappel la fonction carousel après 5000ms / 5 sec
    setTimeout(carousel, 5000);
}
/*Fin deroulement automatique */

/*Deroulement via l'appel aux boutons */
function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
/*Fin roulement via l'appel aux boutons */

/*Fin carousel */

/*Menu */

/*Affichage/déaffichafe du Menu lors du clic sur le burger */
function burgerFunction() {
    //On récupere l'élément ayant pour ID maNAv
    var x = document.getElementById("maNav");
    //Si la class de ce denier vaut topnav on lui rajoute la class responsive pour faire apparaite le menu déroulant sinon on redefinit la class de ce dernier à topnav pour faire disparaitre le menu
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/*Fin Affichage/déaffichafe du Menu lors du clic sur le burger */

/*Retrait du menu lors du clic sur l'un de ses items*/
function menuFunction() {
    var x = document.getElementById("maNav");
    //On enleve la classe responsive lors du clic sur un des items du menu afin de faire disparaitre ce dernier
    x.className = x.className.replace(" responsive", "");
}
/*Fin Retrait du menu lors du clic sur l'un de ses items*/

/*Ajout de la class active pour l'item du menu sélectionné*/
var navContainer = document.getElementById("maNav");
var tabs = navContainer.getElementsByClassName("tab");//On récupere la liste des enfants de navContainer ayant pour class tab.
//pour chaque élément de cette liste on écoute l'élément clic
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");//on enleve la classe active à l'élément actif avant le déclechement de la fonction
        this.className += " active";//et on rajoute la class active sur l'élément auquel on vient de cliquer
    });
}
/*Fin Ajout de la class active pour l'item du menu sélectionné*/

/*Fin Menu */

/*Section Projet */
/*Ajout de la class active pour l'item du menu sélectionné*/
var tabContainer = document.getElementById("navProject");
var tabs2 = tabContainer.getElementsByClassName("tab2");

for (var j = 0; j < tabs2.length; j++) {
    tabs2[j].addEventListener("click", function () {
        var current = document.getElementsByClassName("selected");
        current[0].className = current[0].className.replace(" selected", "");
        this.className += " selected";
    });
}
/*Fin Ajout de la class active pour l'item du menu sélectionné*/

/*Affichage des éléments voulus en fonction de leur catégorie */
function select(wanted) {
    var a = new RegExp("unselected");
    var b = new RegExp("cap-bot " + wanted);
    var projectContainer = document.getElementById("projets");
    switch (wanted) {
    case 'all':
        var projects = projectContainer.getElementsByClassName("cap-bot");
        for (var i = 0; i < projects.length; i++) {

            projects[i].className = projects[i].className.replace(" unselected", "");

        }
        break;
    case 'creative':
        var projects = projectContainer.getElementsByClassName("cap-bot");
        var test = new RegExp("cap-bot " + wanted);
        for (var i = 0; i < projects.length; i++) {
            if (a.test(projects[i].className)) {

                projects[i].className = projects[i].className.replace(" unselected", "");

            }
        }
        for (var i = 0; i < projects.length; i++) {
            if (!(b.test(projects[i].className))) {
                projects[i].className += " unselected";
            }
        }
        break;
    case 'corporate':
        var projects = projectContainer.getElementsByClassName("cap-bot");
        for (var i = 0; i < projects.length; i++) {
            if (a.test(projects[i].className)) {
                projects[i].className = projects[i].className.replace(" unselected", "");
            }
        }
        for (var i = 0; i < projects.length; i++) {
            if (!(b.test(projects[i].className))) {
                projects[i].className += " unselected";
            }
        }
        break;
    case 'portfolio':
        var projects = projectContainer.getElementsByClassName("cap-bot");
        for (var i = 0; i < projects.length; i++) {
            if (a.test(projects[i].className)) {
                projects[i].className = projects[i].className.replace(" unselected", "");
            }
        }
        for (var i = 0; i < projects.length; i++) {
            if (!(b.test(projects[i].className))) {
                projects[i].className += " unselected";
            }
        }
        break;
    }


}
/* Fin affichage des éléments voulus en fonction de leur catégorie */

/*Fin Section Projet */
// Sélectionnez le bouton de retour en haut
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Ajoutez un gestionnaire d'événements pour la détection du défilement
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Si l'utilisateur a fait défiler la page de plus de 20 pixels, affichez le bouton
        scrollToTopButton.style.display = 'block';
    } else {
        // Sinon, masquez le bouton
        scrollToTopButton.style.display = 'none';
    }
});
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// Sélectionnez le bouton de basculement de thème et l'icône
const themeToggle = document.getElementById('themeToggle');
const lightThemeButton = document.getElementById('lightTheme');
const darkThemeButton = document.getElementById('darkTheme');

// Écoutez l'événement de clic sur le bouton de basculement de thème
themeToggle.addEventListener('click', () => {
    // Vérifiez si le thème sombre est actif
    const isDarkThemeActive = document.body.classList.contains('dark-theme');

    // Si le thème sombre est actif, basculez vers le thème clair
    if (isDarkThemeActive) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        // Mettez à jour l'icône du bouton en mode sombre
        themeToggle.classList.remove('bx-moon');
        themeToggle.classList.add('bx-sun');
    } else {
        // Sinon, basculez vers le thème sombre
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        // Mettez à jour l'icône du bouton en mode clair
        themeToggle.classList.remove('bx-sun');
        themeToggle.classList.add('bx-moon');
    }
});

// Vérifiez le thème actif au chargement de la page et mettez à jour l'icône
if (document.body.classList.contains('dark-theme')) {
    themeToggle.classList.add('bx-moon');
} else {
    themeToggle.classList.add('bx-sun');
}




// Ajoutez un gestionnaire d'événements pour le clic sur le bouton
scrollToTopButton.addEventListener('click', () => {
    // Faites défiler la page jusqu'en haut avec une animation fluide
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//reviews swiper script
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

 


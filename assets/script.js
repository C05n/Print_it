const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

/*** Déclaration des différents éléments ***/ 
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

/*** Mise de place de l'état de la slide ***/
let currentSlide = 0;

/*** Fonction de mise à jour des slides et des points ***/ 

function updateSlide() {
   bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
   bannerText.innerHTML = slides[currentSlide].tagLine;
   updateDots();
}

function updateDots() {
   dots.innerHTML = '';
   for (let i = 0; i < slides.length; i++) {
       const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentSlide) dot.classList.add('dot_selected');
        dots.appendChild(dot);
		  dot.addEventListener('click', () => {
			   currentSlide = i;
			   updateSlide();
		  });
   }
}

/*** Fonctionnalité des flèches ***/

arrowLeft.addEventListener('click', () => {
   currentSlide = currentSlide - 1;
	if (currentSlide < 0) currentSlide = slides.length - 1;
   updateSlide();
});

arrowRight.addEventListener('click', () => {
   currentSlide = (currentSlide + 1);
	if (currentSlide >= slides.length) currentSlide = 0;
   updateSlide();
});

updateSlide();

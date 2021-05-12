'strict';

import countTimer from './modules/countTimer';
import togglePopUp from './modules/togglePopUp';
import toggleMenu from './modules/toggleMenu';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
// import sliderCarousel from './modules/sliderCarousel';
import changePhotos from './modules/changePhotos';
import validation from './modules/validation';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
countTimer('01 june 2021');

// menu
toggleMenu();

//popup
togglePopUp();

scroll();

//tabs
tabs();

//  slider
slider();

// // //  sliderCarousel
// sliderCarousel();

// team photos
changePhotos();

//validation
validation();

//calculator
calculator(100);

//send ajax form
//accessing id elements without getElementById
sendForm(form1);
sendForm(form3);
sendForm(form2);

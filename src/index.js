// Importing all the css, js, and image file

import './style.css'
import './webpack_img.png'
import {home} from './home'

console.warn(home());

window.uclicked = function() {
    document.body.style.backgroundColor = 'yellow';
};  


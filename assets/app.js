// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
// import './styles/app.css';

import './styles/app.scss'; // Agregamos los estilos css
import { createApp } from 'vue';
import Saludo from './components/Saludo.vue';

createApp({
    components: {
        Saludo
    }
}).mount('#app');

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

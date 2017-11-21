import sum from './utillib.js';
import DocReady from 'es6-docready'

DocReady( () => {
    const sayhello = document.getElementById("sayhello");
    const showhello = document.getElementById("showhello");

    sayhello.addEventListener("click", function(){
        showhello.innerText = "Allo, allo";
    });
});

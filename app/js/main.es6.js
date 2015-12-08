import Game from './game/game.es6';

window.onload = () => {
    console.log('WindowOnLoad')
    let c = window.document.getElementById('canvas');

    new Game({
        canvas: c
    });
};
import Game from './game/game.es6';
import CFG from './game/config.es6';

window.onload = () => {
    console.log('WindowOnLoad')
    let c = window.document.getElementById('canvas');

    c.width = CFG.WINDOW_WIDTH;
    c.height = CFG.WINDOW_HEIGHT;

    new Game({
        canvas: c
    });
};

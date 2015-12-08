import Game from './../../app/js/game/game.es6';

describe('Game sample test.', () => {
    it('Game should be a function', () => {
        expect(typeof Game).toBe('function');
    });
})
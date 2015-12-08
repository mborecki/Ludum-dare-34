import Engine from './../../app/js/engine/engine.es6';

describe('Engine sample test.', () => {
    it('Engine should be a object', () => {
        expect(typeof Engine).toBe('object');
    });

    it('Engine should have start function', () => {
        expect(typeof Engine.start).toBe('function');
    });

    it('Engine should have stop function', () => {
        expect(typeof Engine.stop).toBe('function');
    });

    it('Engine should have loop function', () => {
        expect(typeof Engine.loop).toBe('function');
    });

    it('Engine should have update function', () => {
        expect(typeof Engine.update).toBe('function');
    });

    it('Engine should have draw function', () => {
        expect(typeof Engine.draw).toBe('function');
    });
})
import EMath from './math.es6';

class Vector2d {
    static rotate(vector, rad) {
        let result = [];
        let cos = Math.cos(rad);
        let sin = Math.sin(rad);
        result[0] = vector[0]*cos + vector[1]*sin;
        result[1] = -vector[0]*sin + vector[1]*cos;

        return result;
    }

    static add(...v) {
        let x = 0;
        let y = 0
        for (var i = 0; i < v.length; i++) {
            x += v[i][0];
            y += v[i][1];
        }
        return [x,y];
    }
}

export default Vector2d;

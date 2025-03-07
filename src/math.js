// math.js

/**
 * Função para somar dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma de a e b.
 * @throws {TypeError} Se a ou b não forem números.
 */
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Os parâmetros devem ser números');
    }
    return a + b;
}

module.exports = { add };

import _ from 'underscore';

/**
 * Esta función crea un nuevo deck de cartas
 * @param {Array <String>} tiposDeCarta Ej: ['C','D','H','S']
 * @param {Array <String>} tiposEspeciales Ej: ['A','J','Q','K']
 * @returns {Array <String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck   = [];

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error ('tiposDeCarta es obligatorio como un arreglo de strings');

    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error ('tiposEspeciales es obligatorio como un arreglo de strings');
   
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );

    return deck;
};

//export default crearDeck;

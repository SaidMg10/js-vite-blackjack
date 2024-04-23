/**
 * Obtener el valor de la carta
 * @param {String} carta Agarra el string de la carta que se otorga 
 * @returns {Number} Retorna el valor de la carta que se otorga al pedir una carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
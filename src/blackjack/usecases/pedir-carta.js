
/**
 * Pide una carta
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} Retorna un arreglo de una carta y lo elimina del deck
 */
export const pedirCarta = ( deck ) => {

    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
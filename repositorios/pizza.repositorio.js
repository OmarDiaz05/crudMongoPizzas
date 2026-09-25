// Esta es la capa donde se persisten los datos

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


/**
 * Retorna la lista de todas las pizzas almacenadas.
 * @returns {Array} Lista de pizzas
 */
export async function obtenerTodasLasPizzasAsync() {
    return pizzas
}

/**
 * Regresa la pizza del id buscado o undefined si no lo encuentra.
 * @param {*} id Identificador de la pizza que se desea buscar
 * @returns {Object|undefined} Pizza encontrada o undefined
 */
export async function obtenerPizzaPorIdAsync(id) {
    return pizzas.find(x => x.id == id)
}

/**
 * Agrega una nueva pizza a la lista de pizzas.
 * @param {Object} pizza Pizza que se desea agregar
 * @returns {void} No retorna ningún valor
 */
export async function agregarPizzaAsync(pizza) {
}

/**
 * Actualiza los datos de una pizza existente.
 * Busca la pizza mediante su id y modifica su nombre y descripción.
 * @param {Object} pizza Pizza con los datos actualizados
 * @returns {void} No retorna ningún valor
 */
export async function actualzarPizzaAsync(pizza) {
}

/**
 * Elimina una pizza de la lista mediante su id.
 * @param {*} id Identificador de la pizza que se desea eliminar
 * @returns {void} No retorna ningún valor
 */
export async function borrarPizzaAsync(id) {
}
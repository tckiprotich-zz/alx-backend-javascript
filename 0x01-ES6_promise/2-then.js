/**
 * Handles the response from an API promise.
 * @param {Promise} promise - The promise returned from the API.
 * @returns {Object} - An object with a status code and a body message.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}

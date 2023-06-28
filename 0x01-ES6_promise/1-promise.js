/**
 * Returns a Promise that resolves to a response object with a status
 *  code and body if success is true,
 * otherwise rejects with an error object.
 * @param {boolean} success - A boolean value indicating whether the
 *  API call was successful or not.
 * @returns {Promise} - A Promise that resolves to a response object
 *  or rejects with an error object.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}

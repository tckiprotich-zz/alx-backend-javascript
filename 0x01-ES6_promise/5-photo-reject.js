/**
 * Uploads a photo and returns a Promise that resolves with
 *  the processed photo data or rejects with an Error object.
 * @param {string} fileName - The name of the file to be processed.
 * @returns {Promise} - A Promise that resolves with the processed
 *  photo data or rejects with an Error object.
 */
export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Your photo processing logic here
    // If the photo processing fails, call reject with an Error object
    // and the string `$fileName cannot be processed`
    const processingFailed = true;
    if (processingFailed) {
      const error = new Error(`${fileName} cannot be processed`);
      reject(error);
    } else {
      // If the photo processing succeeds, call resolve with the processed photo data
      const processedPhoto = 'processed-photo-data';
      resolve(processedPhoto);
    }
  });
}

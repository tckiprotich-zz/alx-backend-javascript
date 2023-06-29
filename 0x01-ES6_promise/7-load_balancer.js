/**
 * Returns a Promise that resolves or rejects as soon as one
 *  of the input Promises resolves or rejects.
 *
 * @param {Promise} chinaDownload - The Promise representing
 *  the download from China server.
 * @param {Promise} USDownload - The Promise representing the
 *  download from US server.
 * @returns {Promise} - A Promise that resolves or rejects as
 *  soon as one of the input Promises resolves or rejects.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

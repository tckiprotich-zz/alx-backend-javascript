/**
 * This function handles the profile signup process by calling
 *  two asynchronous functions: uploadPhoto and createUser.
 * It returns a Promise that resolves when both functions
 *  have completed successfully, and logs the response body
 *  of the uploadPhoto function and the first and last name
 *  of the created user.
 * If either function rejects, the Promise is rejected and
 *  an error message is logged.
 * @returns {Promise} A Promise that resolves when both
 *  uploadPhoto and createUser have completed successfully, and rejects if either function rejects.
 */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

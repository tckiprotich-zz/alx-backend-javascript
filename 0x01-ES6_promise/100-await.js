import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously uploads a photo and creates a user using the `uploadPhoto`
 *  and `createUser` functions from the `utils` module.
 * @returns {Promise<{photo: string|null, user: object|null}>} A promise that
 *  resolves to an object containing the uploaded photo and created user, or
 *  null values if either operation fails.
 */
export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}

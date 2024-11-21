import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Utilisation de Promise.allSettled pour attendre que toutes les promesses se terminent
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ])
  .then((results) =>
    // Utilisation de map pour structurer chaque résultat sous la forme { status, value }.
    results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }))
  );
}

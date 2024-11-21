import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // Extrait les valeurs des objets résolus
      const { body } = results[0];
      const { firstName, lastName } = results[1];

      // Afficher le bon format des valeurs
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

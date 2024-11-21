export default function handleResponseFromAPI(promise) {
  return promise
    // .then() est exécuté lorsque la promesse est résolue avec succès.
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    // .catch() est exécuté en cas d'échec de la promesse.
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}

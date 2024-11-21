export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve.append({ status: 200, body: 'Success' });
    } if (success === false) {
      reject.append(new Error('The fake API is not working currently'));
    }
  });
}

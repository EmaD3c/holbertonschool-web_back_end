export default function hasValuesFromArray(set, array) {
  // Vérifier si un élément est présent dans le Set
  // every() est une méthode qui renvoie true si tous les éléments satisfont la condition
  return array.every((element) => set.has(element));
}

export default function updateUniqueItems(map) {
  // Vérifiez si l'argument est bien une instance de Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // Parcourir les element dans map
  for (const [key, value] of map.entries()) {
    // Si la quantité est à 1 la mettre a 100
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}

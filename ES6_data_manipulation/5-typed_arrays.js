export default function createInt8TypedArray(length, position, value) {
  // Creer un ArrayBuffer
  const buffer = new ArrayBuffer(length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // DataView pour manipuler le contenu de l’ArrayBuffer
  const view = new DataView(buffer);
  // definir la valeur value en tant que Int8 à la position specifiee
  view.setInt8(position, value);

  return view;
}

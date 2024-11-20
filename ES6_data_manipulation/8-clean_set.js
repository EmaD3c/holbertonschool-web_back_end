export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    // Pour chaque valeur filtrée, on enlève le préfixe (startString)
    .map((value) => value.slice(startString.length))
    // Les parties restantes sont combinées en une seule chaîne, séparées par des tirets (-).
    .join('-');
}

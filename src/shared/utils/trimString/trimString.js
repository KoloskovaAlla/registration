/**
 * @param {string} string
 * @param {number } maxLength
 * @returns {string} Обрезанная строка с сохранением целостности слова
 */

export const trimString = (string, maxLength) => {
  if (string.length < maxLength) return string;
  string = string.slice(0, maxLength + 1);
  const arr = string.split(' ');
  arr.length--;
  string = arr.join(' ');
  return string;
};

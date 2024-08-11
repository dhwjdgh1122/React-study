export function randomNumber(min = 0, max = 10) {
  if (min > max) throw new Error('max 보다 min 값이 큽니다.');
  return Math.round(Math.random() * (max - min) + min);
}

export function isTrueOrFalse() {
  return Math.random() > 0.5;
}

// --------------------------------------------------------------------------
// let, const (block scope)
// - var, let 비교 (변수 : 시간의 흐름에 따라 값이 변경될 때)
// - const를 사용하는 이유 (상수 : 원시형 값이 변경되지 않거나, 또는 객체형 타입 지정이 필요한 경우)
// --------------------------------------------------------------------------

const numbers = [3, 6, 9, 12, 23];

for (let i = 0, l = numbers.length; i < l; i += 1) {
  console.log({ [i]: numbers[i] });
}

// 🔶 for 블록 내부에서만 i 변수가 사용되도록 설정합니다.
// console.log(i);

// 🔶 numbers 타입이 변경되지 않도록 타입을 고정해보세요.
// numbers = {
//   recordType: 'number',
//   records: numbers,
// };

console.log(numbers.length);
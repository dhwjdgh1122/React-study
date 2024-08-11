import { typeOf } from './typeOf';

const generateTypeValidation =
  (allowedType) => (props, propName, componentName) => {
    const propValue = props[propName];
    const propType = typeOf(propValue);

    if (propType !== allowedType) {
      throw new Error(
        `${componentName} 컴포넌트 ${propName} 속성 타입은 "${allowedType}" 타입이 요구되나, 실제 전달된 타입은 "${propType}"입니다.`
      );
    }
  };

export const string = generateTypeValidation('string');
export const number = generateTypeValidation('number');
export const bool = generateTypeValidation('boolean');
export const symbol = generateTypeValidation('symbol');
export const func = generateTypeValidation('function');
export const array = generateTypeValidation('array');
export const object = generateTypeValidation('object');

export const oneOf = (types) => (props, propName, componentName) => {
  const propValue = props[propName];
  const propType = typeOf(propValue);
  const allowedType = 'string';

  const typeMatchString = types.reduce((result, type, index, array) => {
    const divider = index < array.length - 1 ? '|' : '';
    return result + type + divider;
  }, '');

  const typeMatch = new RegExp(`^(${typeMatchString})$`, 'i');

  if (propType !== allowedType || !typeMatch.test(propValue)) {
    throw new Error(
      `${componentName} 컴포넌트 ${propName} 속성에 설정 가능한 값은 "[${types.toString()}]" 중 하나가 요구되나, 실제 전달된 속성 값은 "${propValue}"입니다.`
    );
  }
};

const PropTypes = Object.freeze({
  string,
  number,
  bool,
  symbol,
  func,
  array,
  object,
  oneOf,
});

export default PropTypes;

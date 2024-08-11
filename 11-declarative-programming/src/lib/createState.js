/**@type {(data: { [key:string]: any }, callback: () => void) => [{ [key:string]: any }, (key: string, value: any) => void]} */
const createState = (data, callback) => {
  let allowUpdate = false;

  const state = new Proxy(data, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, newValue) {
      if (!allowUpdate) {
        console.warn('🚫 스토어 데이터를 직접 수정할 수 없습니다.');
        return false;
      }

      target[prop] = newValue;
      callback?.();

      return true;
    },
  });

  const action = (key, value) => {
    allowUpdate = true;
    state[key] = value;
    allowUpdate = false;
  };

  return [state, action];
};

export default createState;

export function throttle(callback, timeout = 400) {
  let isCalled = false;

  return (...args) => {
    if (!isCalled) {
      setTimeout(() => {
        callback.apply(null, args);
        isCalled = false;
      }, timeout);
      isCalled = true;
    }
  };
}

export function debounce(callback, timeout = 400) {
  let cleanup = null;

  return (...args) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(callback.bind(null, ...args), timeout);
  };
}

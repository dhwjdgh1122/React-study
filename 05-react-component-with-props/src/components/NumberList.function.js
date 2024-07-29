import React from 'https://esm.sh/react';

function NumberList(props) {
  const numbers = Array(props.count)
    .fill(null)
    .map((_, index) => React.createElement('li', {}, `${index + 1}01`));

  return React.createElement('ul', { className: 'number-list' }, numbers);
}

export default NumberList;
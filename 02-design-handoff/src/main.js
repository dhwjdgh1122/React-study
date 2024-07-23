// ---------------------------------------------------------
// STEP 1. Vanilla Script (ES + DOM API)
// STEP 2. Class Programming
// STEP 3. Web Components API
// ---------------------------------------------------------

const DRAGGING_CLASSNAME = 'dragging';

const list = document.querySelector('.list');

list.addEventListener('dragover', (e) => {
  e.preventDefault();

  const draggedItem = listItems.find((item) =>
    item.classList.contains(DRAGGING_CLASSNAME)
  );

  const restItems = listItems.filter((item) => !Object.is(item, draggedItem));

  const replaceItem = restItems.find((item, index) => {
    return e.clientY <= item.offsetTop + item.offsetHeight * 0.5;
  });

  list.insertBefore(draggedItem, replaceItem);
});

const listItems = Array.from(list.querySelectorAll('li'));

listItems.forEach((item) => {
  item.setAttribute('draggable', true);

  item.addEventListener('dragstart', (e) => {
    e.currentTarget.classList.add(DRAGGING_CLASSNAME);
  });

  item.addEventListener('dragend', (e) => {
    e.currentTarget.classList.remove(DRAGGING_CLASSNAME);
  });

  const handleButton = item.querySelector('[data-role="handle"]');

  if (handleButton) {
    handleButton.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          const prevItem = item.previousElementSibling;
          if (prevItem) {
            prevItem.before(item);

            e.currentTarget.focus();
          }

          break;

        case 'ArrowDown':
          const nextItem = item.nextElementSibling;
          if (nextItem) {
            nextItem.after(item);

            e.currentTarget.focus();
          }

          break;
      }
    });
  }
});
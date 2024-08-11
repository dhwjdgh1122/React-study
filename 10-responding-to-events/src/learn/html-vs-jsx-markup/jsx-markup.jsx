import DataBinding from './data-binding';
import ConditionalRendering from './conditional-rendering';
import ConditionalDisplay from './conditional-display';
import RenderLists from './render-lists';
import * as learnData from '@/data/learn.js';

function JSX_Markup() {
  const { imageType, isShowReactImage, reactLibrary, statusMessages } =
    learnData;

  return (
    <dl className="descriptionList">
      <DataBinding statusMessages={statusMessages} />
      <ConditionalRendering imageType={imageType} />
      <ConditionalDisplay isShowReactImage={isShowReactImage} />
      <RenderLists
        statusMessages={statusMessages}
        reactLibrary={reactLibrary}
      />
    </dl>
  );
}

export default JSX_Markup;

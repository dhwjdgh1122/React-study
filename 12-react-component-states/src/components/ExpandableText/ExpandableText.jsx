// --------------------------------------------------------------------------
// ✅ ExpandableText 컴포넌트
// --------------------------------------------------------------------------
// - [x] `children` 속성(prop) 길이에 따라 확장 가능한 텍스트 렌더링
// - [x] `limit` 속성(기본 값: 255) 값보다 `children` 길이가 짧은 경우 텍스트만 표시
// - [x] `limit` 속성 값보다 `children` 길이가 긴 경우 텍스트 말줄임(...) 표시
// - [x] `limit` 속성 값보다 `children` 길이가 긴 경우 확장 or 축소 버튼 표시
// - [x] 확장 or 축소 버튼을 사용자가 클릭하면 텍스트 확장 또는 축소되어 표시
// --------------------------------------------------------------------------

import { string, number } from 'prop-types';
import { useState } from 'react';
import './ExpandableText.css';

// ClassComponent [propTypes]
ExpandableText.propTypes = {
  children: string.isRequired,
  limit: number,
};

// ClassComponent
// ClassComponent [props], [defaultProps]
// ClassComponent [render method]
function ExpandableText({ children, limit = 255 }) {
  // 컴포넌트 상태 선언(정의)
  // const [isExpand, setIsExpand] = useState(false);
  const [state, setState] = useState({
    isExpand: false,
  });

  // 파생된 상태 (from props)
  // isExpandable: boolean;
  // get derived state from props
  const isExpandable = children.length > limit;
  let renderText = children;

  if (isExpandable) {
    renderText = children.slice(0, limit) + '...';
  }

  const buttonLabel = state.isExpand ? '축소' : '확장';

  // ClassComponent instance methods
  // this.handleExpand
  const handleExpand = () => {
    // update component state
    // ClassComponent
    // this.setState(nextState)
    const nextExpandValue = !state.isExpand;
    console.log('컴포넌트 상태 업데이트 요청');
    setState({
      isExpand: nextExpandValue,
    });
  };

  // ClassComponent JSX (Markup)
  return (
    <div className="ExpandableText">
      <p>{state.isExpand ? children : renderText}</p>
      {isExpandable && (
        <button type="button" onClick={handleExpand}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default ExpandableText;

// --------------------------------------------------------------------------
// ✅ ExpandableText 컴포넌트
// --------------------------------------------------------------------------
// - [x] `children` 속성(prop) 길이에 따라 확장 가능한 텍스트 렌더링
// - [x] `limit` 속성(기본 값: 255) 값보다 `children` 길이가 짧은 경우 텍스트만 표시
// - [x] `limit` 속성 값보다 `children` 길이가 긴 경우 텍스트 말줄임(...) 표시
// - [x] `limit` 속성 값보다 `children` 길이가 긴 경우 확장 or 축소 버튼 표시
// - [x] 확장 or 축소 버튼을 사용자가 클릭하면 텍스트 확장 또는 축소되어 표시
// --------------------------------------------------------------------------

import { node, number } from 'prop-types';
import { Component } from 'react';
import './ExpandableText.css';

class ExpandableText extends Component {
  static propTypes = {
    children: node.isRequired, // React.ReactNode
    limit: number,
  };

  state = {
    isExpand: false,
  };

  render() {
    const { isExpand } = this.state;
    const { children, limit, ...restProps } = this.props;

    // children.length [campare] limit
    // 파생된 상태 설정
    let renderText = children;

    const isExpandable = children.length > limit;

    if (isExpandable) {
      renderText = children.toString().slice(0, limit) + '...';
    }

    const buttonLabel = isExpand ? '축소' : '확장';

    return (
      <div className="ExpandableText" {...restProps}>
        <p>{isExpand ? children : renderText}</p>
        {isExpandable && (
          <button type="button" onClick={this.handleExpand}>
            {buttonLabel}
          </button>
        )}
      </div>
    );
  }

  handleExpand = () => {
    // 상태 업데이트 기능 추가
    this.setState({
      isExpand: !this.state.isExpand,
    });
  };
}

ExpandableText.defaultProps = {
  limit: 255,
};

export default ExpandableText;

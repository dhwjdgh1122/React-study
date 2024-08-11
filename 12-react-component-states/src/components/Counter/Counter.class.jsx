// ------------------------------------------------------------------------------
// ✅ Counter 컴포넌트
// ------------------------------------------------------------------------------
// - [x] `count` 속성(prop, 기본 값: 1)을 전달받아 화면에 표시
// - [x] `step` 속성(기본 값: 1)을 전달받아 버튼 레이블에 표시
// - [x] `min` 속성(기본 값: 1) 보다 `count` 값이 크거나 같아야 함
// - [x] `max` 속성(기본 값: 1000) 보다 `count` 값이 작거나 같아야 함
// - [x] 사용자가 감소 버튼을 클릭하면 `count` 감소 (step 만큼)
// - [x] 사용자가 증가 버튼을 클릭하면 `count` 증가 (step 만큼)
// - [x] 사용자가 감소 버튼을 클릭했을 때 `count` 값이 `min` 보다 작거나 같을 경우 감소 버튼 비활성화
// - [x] 사용자가 증가 버튼을 클릭했을 때 `count` 값이 `max` 보다 크거나 같을 경우 증가 버튼 비활성화
// ------------------------------------------------------------------------------

import { Component } from 'react';
import { number } from 'prop-types';

class Counter extends Component {
  static propTypes = {
    count: number,
    step: number,
    min: number,
    max: number,
  };

  static defaultProps = {
    count: 1,
    step: 1,
    min: 1,
    max: 1000,
  };

  constructor(props) {
    super(props);

    const { count: initialCount, min, max } = props;

    if (initialCount < min || initialCount > max) {
      throw new Error(`count 값이 min 보다 작거나, max보다 큽니다.`);
    }

    this.state = {
      count: initialCount,
    };

    // 메서드에 this 연결
    // this.handleDecrease = this.handleDecrease.bind(this);
    // this.handleIncrease = this.handleIncrease.bind(this);
  }

  render() {
    const { count } = this.state;
    const { step, min, max } = this.props;

    const isDisabledDecrease = count <= min;
    const isDisabledIncrease = count >= max;

    return (
      <div className="Counter">
        <button
          type="button"
          disabled={isDisabledDecrease}
          onClick={this.handleDecrease}
        >
          -{step}
        </button>
        <output>{this.state.count}</output>
        <button
          type="button"
          disabled={isDisabledIncrease}
          onClick={this.handleIncrease}
        >
          +{step}
        </button>
      </div>
    );
  }

  // Class Fields
  // this.handleDecrease
  handleDecrease = () => {
    console.log('1. [1] before: state.count = ', this.state.count);

    const nextCount = this.state.count - this.props.step;

    this.setState({ count: nextCount }, () => {
      // 컴포넌트의 상태가 업데이트 되었음을 보장
      console.log('2. [3] callback: state.count = ', this.state.count);
    });

    console.log('3. [2] after: state.count = ', this.state.count);
  };

  // this.handleIncrease
  handleIncrease = () => {
    const nextCount = this.state.count + this.props.step;
    this.setState({
      count: nextCount,
    });
  };
}

// React 개발 도구(devTools)에 표시되는 이름 설정
// 참고: https://ko.legacy.reactjs.org/docs/react-component.html#displayname
Counter.displayName = 'CounterClass';

export default Counter;

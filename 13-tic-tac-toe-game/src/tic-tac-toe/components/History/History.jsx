// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (History 컴포넌트)
// --------------------------------------------------------------------------
// - [x] 게임 히스토리, 게임 인덱스를 Game 컴포넌트로부터 속성으로 전달받습니다.
// - [x] History 컴포넌트 속성을 검사합니다.
// --------------------------------------------------------------------------

import { arrayOf, func, number } from 'prop-types';
import { OneOfPlayerListType } from '@/tic-tac-toe/types/type.d';
import S from './History.module.css';

History.propTypes = {
  gameIndex: number.isRequired,
  gameHistory: arrayOf(OneOfPlayerListType),
  onTimeTravel: func,
};

function History({ gameIndex, gameHistory = [], onTimeTravel }) {
  const handleClick = (index) => () => onTimeTravel(index);

  return (
    <div className={S.component}>
      <ol>
        {gameHistory.map((history, index) => {
          const buttonLabel = index === 0 ? '게임 시작' : `게임 #${index}`;
          const isDisabled = gameIndex === index;

          return (
            <li key={index}>
              <button
                type="button"
                onClick={handleClick(index)}
                disabled={isDisabled}
              >
                {buttonLabel}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default History;

import reactSVG from '@/assets/react.svg?url';
import viteSVG from '@/assets/vite.svg?url';
import nextJsSVG from '@/assets/next-js.svg?url';
import { randomNumber, PropTypes } from '@/utils';

function ConditionalRendering({ imageType }) {
  let imageSrc = '';

  // if (imageType === 'vite') {
  //   imageSrc = viteSVG;
  // }

  // if (imageType === 'react') {
  //   imageSrc = reactSVG;
  // }

  switch (imageType) {
    case 'react':
      imageSrc = reactSVG;
      break;
    case 'vite':
      imageSrc = viteSVG;
      break;
    case 'next.js':
      imageSrc = nextJsSVG;
      break;
  }

  return (
    <>
      <dt>조건부 렌더링(conditional rendering)</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          <img src={imageSrc} alt="" />
          {imageType.includes('vite') && <p>{imageType}</p>}
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className="conditionalRendering">
          {randomNumber(0, 1) > 0.5 ? (
            <img
              className="spinner"
              src="/icons/spinner.svg"
              alt="로딩 중..."
            />
          ) : (
            <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
          )}
        </div>
      </dd>
    </>
  );
}

export default ConditionalRendering;

ConditionalRendering.propTypes = {
  imageType: PropTypes.oneOf(['react', 'vite', 'next.js']),
};

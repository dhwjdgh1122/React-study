// --------------------------------------------------------------------------
// ✅ 컴포넌트의 순수성(Purity)
// --------------------------------------------------------------------------
// - [ ] 컴포넌트 = 순수 함수
// - [ ] 컴포넌트 지역 내, 수정 (Local Mutation)
// - [ ] 컴포넌트의 순수성 부수기 (부수 효과 코드 포함)
// --------------------------------------------------------------------------

import { UserType } from '@/@types/globals.d';

Avatar.propTypes = {
  user: UserType.isRequired,
};

function Avatar({ user }) {
  const { name, photo, status, size } = user;

  let iconPath = '';
  let statusMessage = '';

  switch (status) {
    default:
    case 'offline':
      iconPath = '/icons/status-offline.svg';
      statusMessage = '오프라인';
      break;
    case 'online':
      iconPath = '/icons/status-online.svg';
      statusMessage = '온라인';
      break;
    case 'dont-disturb':
      iconPath = '/icons/status-dont-disturb.svg';
      statusMessage = '방해금지';
      break;
    case 'away':
      iconPath = '/icons/status-away.svg';
      statusMessage = '자리비움';
      break;
  }

  const label = `${name} (${statusMessage})`;

  return (
    <figure className="Avatar" aria-label={label} title={label}>
      <img src={`/faces/${photo}`} alt={name} width={size} height={size} />
      <figcaption>
        <img src={iconPath} alt="" />
      </figcaption>
    </figure>
  );
}

export default Avatar;

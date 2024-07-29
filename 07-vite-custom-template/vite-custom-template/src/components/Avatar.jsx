
// eslint-disable-next-line react/prop-types
function Avatar({ name, photo, status = 'offline', size = 64 }) {
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
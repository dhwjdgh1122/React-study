import { UserType } from '@/@types/type.d';

UserDetail.propTypes = {
  user: UserType.isRequired,
};

function UserDetail({ user }) {
  return (
    <li>
      <strong>{user.name}</strong>{' '}
      <span>
        <a
          style={{ color: '#aaa', textDecoration: 'none' }}
          href={`mailto:${user.email}`}
        >
          {user.email} ({user.city})
        </a>
      </span>
    </li>
  );
}

export default UserDetail;

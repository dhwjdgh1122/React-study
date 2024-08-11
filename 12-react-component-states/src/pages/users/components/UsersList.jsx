import { UsersListType } from '../types/user';
import UserDetail from './UserDetail';
import './UsersList.css';

UsersList.propTypes = {
  users: UsersListType.isRequired,
};

function UsersList({ users }) {
  return (
    <ul className="UsersList">
      {users.map((user) => (
        <UserDetail key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;

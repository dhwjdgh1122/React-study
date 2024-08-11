import { number } from 'prop-types';

UserListCount.propTypes = {
  searchedUsersCount: number.isRequired,
  totalUsersCount: number.isRequired,
};

function UserListCount({ searchedUsersCount, totalUsersCount }) {
  return (
    <span data-testid="user-list-count" style={{ fontSize: 12 }}>
      {searchedUsersCount} / <b>{totalUsersCount}</b>
    </span>
  );
}

export default UserListCount;

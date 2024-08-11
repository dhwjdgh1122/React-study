import usersData from '@/data/users';

export function getUserList() {
  return usersData;
}

export function getUser(userId) {
  const userList = getUserList();
  const user = userList.find((user) => user.id === userId);
  return user ? user : null;
}

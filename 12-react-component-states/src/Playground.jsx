import UsersPage from '@/pages/users/UsersPage';

function Playground() {
  return (
    <div style={styles}>
      <UsersPage />
    </div>
  );
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

export default Playground;

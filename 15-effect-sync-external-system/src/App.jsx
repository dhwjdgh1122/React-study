import S from './App.module.css';
import RouterProvider from '@/@euid-router/RouterProvider';
import { GlobalNav } from '@/components';
import routes from '@/routes';

function App() {
  return (
    <div className={S.component}>
      <RouterProvider navigation={<GlobalNav />} routes={routes} />
    </div>
  );
}

export default App;

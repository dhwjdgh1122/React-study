import NavLink from '@/@euid-router/NavLink';
import S from './style.module.css';
import routes from '@/routes';

function GlobalNav() {
  return (
    <nav className={S.component}>
      <h2>학습 주제</h2>
      <ul>
        {routes.map(({ path, title }) => (
          <li key={path}>
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GlobalNav;

import { node, object, string } from 'prop-types';
import S from './style.module.css';
import { useContext } from 'react';
import { RouterContext } from '../RouterProvider';

NavLink.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
  activeClassName: string,
  className: string,
  style: object,
};

function NavLink({
  to,
  className = '',
  activeClassName = S.active,
  style,
  children,
}) {
  const { setHistoryRoute } = useContext(RouterContext);

  const pathname = location.pathname.replace('/', '');

  let isActive = false;

  if (pathname === to || `/${pathname}` === to) {
    isActive = true;
  }

  const classNames = `${S.component} ${
    isActive ? activeClassName : ''
  } ${className}`.trim();

  const handleLink = (e) => {
    e.preventDefault();
    history.pushState(null, '', to);
    setHistoryRoute(to);
  };

  return (
    <a href={to} className={classNames} onClick={handleLink} style={style}>
      {children}
    </a>
  );
}

export default NavLink;

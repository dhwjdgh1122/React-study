import {
  Fragment,
  createContext,
  useLayoutEffect,
  useCallback,
  useState,
  useMemo,
} from 'react';
import { element } from 'prop-types';
import { RouteListType } from './types';
import NotFound from './NotFound';

export const RouterContext = createContext();

RouterProvider.propTypes = {
  routes: RouteListType.isRequired,
  navigation: element,
};

function RouterProvider({ routes, navigation }) {
  const [routeElement, setRouteElement] = useState(null);
  const [navKey, setNavKey] = useState(0);

  const setHistoryRoute = useCallback(
    (to) => {
      const routeInfo = routes.find(
        ({ path }) => path === to || `/${path}` === to
      );

      if (routeInfo) {
        document.title = routeInfo.title;
        setRouteElement(routeInfo.element);
      } else {
        setRouteElement(<NotFound />);
      }
      setNavKey((k) => k + 1);
    },
    [routes]
  );

  useLayoutEffect(() => {
    const { pathname } = location;
    globalThis.addEventListener(
      'popstate',
      setHistoryRoute.bind(null, pathname)
    );
    setHistoryRoute(pathname);
  }, [setHistoryRoute]);

  const value = useMemo(() => ({ setHistoryRoute }), [setHistoryRoute]);

  return (
    <RouterContext.Provider value={value}>
      {<Fragment key={navKey}>{navigation}</Fragment>}
      {routeElement}
    </RouterContext.Provider>
  );
}

export default RouterProvider;

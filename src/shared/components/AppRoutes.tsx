import {FC} from 'react';
import {useRoutes} from 'react-router';
import {useTypesSelector} from '../../hooks/useTypesSelector';
import {routes} from '../../routes';

const AppRoutes: FC = () => {
  const {isAuth} = useTypesSelector((state) => state.auth);
  const routeList = routes(isAuth);
  return useRoutes(routeList);
};

export default AppRoutes;

import {FC} from 'react';
import {useRoutes} from 'react-router';
import {privateRouteList, publicRouteList} from '../../routes';
import {useTypesSelector} from '../../hooks/useTypesSelector';

const AppRoutes: FC = () => {
  const {isAuth} = useTypesSelector((state) => state.auth);

  return useRoutes(isAuth ? privateRouteList : publicRouteList);
};

export default AppRoutes;

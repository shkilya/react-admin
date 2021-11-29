import React, {FC} from 'react';
import {Layout, Menu} from 'antd';
import {useNavigate} from 'react-router-dom';
import {RouteList} from '../../routes/route-list.enum';
import {useTypesSelector} from '../../hooks/useTypesSelector';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const {isAuth} = useTypesSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        {!isAuth ? (
                    <Menu.Item
                      key={1}
                      onClick={() => navigate(RouteList.LOGIN_ROUTE)}
                    >
                        Login
                    </Menu.Item>
                ) : (
                    <>
                      <Menu.Item
                        key={1}
                        onClick={() => navigate(RouteList.EVENT_ROUTE)}
                      >
                            Event
                      </Menu.Item>
                      <Menu.Item key={2} onClick={() => navigate('blog')}>
                            Blog
                      </Menu.Item>
                    </>)}

      </Menu>
    </Layout.Header>
  );
};

export default Navbar;

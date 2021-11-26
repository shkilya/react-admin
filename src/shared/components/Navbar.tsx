import React, {FC} from 'react';
import {Layout, Menu} from 'antd';
import {useNavigate} from 'react-router-dom';
import {RouteList} from '../../routes/route-list.enum';

const Navbar: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item key={1} onClick={() => navigate(RouteList.LOGIN_ROUTE)}>
                    Login
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Navbar;

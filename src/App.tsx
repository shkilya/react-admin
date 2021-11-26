import React, {FC} from 'react';
import './App.css';
import AppRoutes from './shared/components/AppRoutes';
import Navbar from './shared/components/Navbar';
import {Layout} from 'antd';
import {useTypesSelector} from './hooks/useTypesSelector';

const App: FC = () => {
  const {isAuth} = useTypesSelector((state) => state.auth);
  console.log(isAuth);
  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRoutes/>
      </Layout.Content>
    </Layout>
  );
};

export default App;

import React, {FC, useEffect} from 'react';
import './App.css';
import AppRoutes from './shared/components/AppRoutes';
import Navbar from './shared/components/Navbar';
import {Layout} from 'antd';
import {useTypesSelector} from './hooks/useTypesSelector';
import {useAction} from './hooks/useAction';
import {IUser} from './models/IUser';

const App: FC = () => {
  const {setUser, setIsAuth} = useAction();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username') || ''} as IUser);
      setIsAuth(true);
    }
  }, []);

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

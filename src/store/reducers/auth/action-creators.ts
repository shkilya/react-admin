import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';
import {IUser} from '../../../models/IUser';
import {AppDispatch} from '../../index';
import axios from 'axios';

export const AuthActionCreator = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),

  login: (
      username: string,
      password: string,
  ) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreator.setIsLoading(true));
      const {data} = await axios.get<Array<IUser>>('/users');
      const mockUser = data.find((user) =>
        user.username === username && user.password === password,
      );
      if (!mockUser) {
        throw new Error('Something bad happened');
      }
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', mockUser.username);
      dispatch(AuthActionCreator.setIsAuth(true));
      dispatch(AuthActionCreator.setUser(mockUser));
    } catch (e) {
      dispatch(
          AuthActionCreator.setError('Something bad happened'),
      );
    }
    dispatch(AuthActionCreator.setIsLoading(false));
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreator.setIsAuth(false));
    dispatch(AuthActionCreator.setUser({} as IUser));
  },
};

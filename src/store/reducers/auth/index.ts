import {AuthAction, AuthActionEnum, AuthState} from './types';

const initialState: AuthState = {
  isAuth: false,
};


export default (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return {...state, isAuth: action.payload};
    default:
      return state;
  }
};

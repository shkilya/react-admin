import {AuthActionCreator} from './auth/action-creators';
import {BlogActionCreator} from './blog/action-creators';

export const allActionCreators = {
  ...AuthActionCreator,
  ...BlogActionCreator,
};

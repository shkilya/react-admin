import {BlogAction, BlogActionEnum, BlogState} from './types';
import {IBlog} from '../../../models/IBlog';

const initialState: BlogState = {
  blogs: [] as IBlog[],
  error: '',
  isLoading: false,
  selectedBlog: {} as IBlog,
};


export default (state = initialState, action: BlogAction): BlogState => {
  switch (action.type) {
    case BlogActionEnum.GET_ALL_REQUEST:
      return {...state, isLoading: true};
    case BlogActionEnum.GET_ALL_SUCCESS:
      return {...state, isLoading: false, blogs: action.payload, error: ''};
    case BlogActionEnum.GET_ALL_FAILED:
      return {...state, isLoading: false, blogs: [], error: action.payload};

    case BlogActionEnum.GET_ITEM_REQUEST:
      return {...state, isLoading: true};
    case BlogActionEnum.GET_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedBlog: action.payload,
        error: '',
      };
    case BlogActionEnum.GET_ITEM_FAILED:
      return {
        ...state,
        isLoading: false,
        selectedBlog: {} as IBlog,
        error: action.payload,
      };


    case BlogActionEnum.CREATE_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        selectedBlog: action.payload,
      };
    case BlogActionEnum.CREATE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedBlog: action.payload,
        error: '',
      };
    case BlogActionEnum.CREATE_ITEM_FAILED:
      return {
        ...state,
        isLoading: false,
        selectedBlog: {} as IBlog,
        error: action.payload,
      };


    case BlogActionEnum.UPDATE_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        selectedBlog: action.payload,
      };
    case BlogActionEnum.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedBlog: action.payload,
        error: '',
      };
    case BlogActionEnum.UPDATE_ITEM_FAILED:
      return {
        ...state,
        isLoading: false,
        selectedBlog: {} as IBlog,
        error: action.payload,
      };

    case BlogActionEnum.DELETE_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        selectedBlog: action.payload,
      };
    case BlogActionEnum.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedBlog: action.payload,
        error: '',
      };
    case BlogActionEnum.DELETE_ITEM_FAILED:
      return {
        ...state,
        isLoading: false,
        selectedBlog: {} as IBlog,
        error: action.payload,
      };


    default:
      return state;
  }
};

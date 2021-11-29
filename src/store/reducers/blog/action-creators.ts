import {AppDispatch} from '../../index';
import {BlogActionEnum} from './types';
import axios from 'axios';
import {IBlog} from '../../../models/IBlog';

export const BlogActionCreator = {
  getAllRequest: () => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: BlogActionEnum.GET_ALL_REQUEST,
      });
      const {data} = await axios.get<IBlog[]>('/blog');
      dispatch({
        type: BlogActionEnum.GET_ALL_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: BlogActionEnum.GET_ALL_FAILED,
        payload: 'GET_ALL_FAILED',
      });
    }
  },
  getItemRequest: (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: BlogActionEnum.GET_ITEM_REQUEST,
        payload: id,
      });
      const {data} = await axios.get<IBlog>(`/blog/${id}`);
      dispatch({
        type: BlogActionEnum.GET_ITEM_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: BlogActionEnum.GET_ITEM_FAILED,
        payload: 'GET_ITEM_FAILED',
      });
    }
  },
  createItemRequest: (blog: IBlog) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: BlogActionEnum.CREATE_ITEM_SUCCESS,
        payload: blog,
      });
      const {data} = await axios.post<IBlog>(`/blog`, {
        blog,
      });
      dispatch({
        type: BlogActionEnum.CREATE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: BlogActionEnum.CREATE_ITEM_FAILED,
        payload: 'CREATE_ITEM_FAILED',
      });
    }
  },
  updateItemRequest: (blog: IBlog) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: BlogActionEnum.UPDATE_ITEM_REQUEST,
        payload: blog,
      });
      const {data} = await axios.put<IBlog>(`/blog/${blog.id}`, {
        blog,
      });
      dispatch({
        type: BlogActionEnum.UPDATE_ITEM_REQUEST,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: BlogActionEnum.UPDATE_ITEM_FAILED,
        payload: 'UPDATE_ITEM_FAILED',
      });
    }
  },
  deleteItemRequest: (blog: IBlog) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: BlogActionEnum.DELETE_ITEM_REQUEST,
        payload: blog,
      });
      const {data} = await axios.delete<IBlog>(`/blog/${blog.id}`);
      dispatch({
        type: BlogActionEnum.DELETE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: BlogActionEnum.DELETE_ITEM_FAILED,
        payload: 'DELETE_ITEM_FAILED',
      });
    }
  },
};

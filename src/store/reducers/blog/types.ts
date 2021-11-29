import {IBlog} from '../../../models/IBlog';

export interface BlogState {
    selectedBlog: IBlog,
    blogs: IBlog[],
    isLoading?: boolean;
    error?: string;
}

export enum BlogActionEnum {
    GET_ALL_REQUEST = 'GET_ALL_REQUEST',
    GET_ALL_SUCCESS = 'GET_ALL_SUCCESS',
    GET_ALL_FAILED = 'GET_ALL_FAILED',

    GET_ITEM_REQUEST = 'GET_ITEM_REQUEST',
    GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS',
    GET_ITEM_FAILED = 'GET_ITEM_FAILED',


    CREATE_ITEM_REQUEST = 'CREATE_ITEM_REQUEST',
    CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS',
    CREATE_ITEM_FAILED = 'CREATE_ITEM_FAILED',

    UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST',
    UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS',
    UPDATE_ITEM_FAILED = 'UPDATE_ITEM_FAILED',


    DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST',
    DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS',
    DELETE_ITEM_FAILED = 'DELETE_ITEM_FAILED',
}


export interface GetAllRequestAction {
    type: BlogActionEnum.GET_ALL_REQUEST
}

export interface GetAllSuccessAction {
    type: BlogActionEnum.GET_ALL_SUCCESS,
    payload: IBlog[]
}

export interface GetAllFailedAction {
    type: BlogActionEnum.GET_ALL_FAILED,
    payload: string
}


export interface GetItemRequestAction {
    type: BlogActionEnum.GET_ITEM_REQUEST,
    payload: string
}

export interface GetItemSuccessAction {
    type: BlogActionEnum.GET_ITEM_SUCCESS,
    payload: IBlog
}

export interface GetItemFailedAction {
    type: BlogActionEnum.GET_ITEM_FAILED,
    payload: string
}


export interface CreateItemRequestAction {
    type: BlogActionEnum.CREATE_ITEM_REQUEST,
    payload: IBlog
}

export interface CreateItemSuccessAction {
    type: BlogActionEnum.CREATE_ITEM_SUCCESS,
    payload: IBlog
}

export interface CreateItemFailedAction {
    type: BlogActionEnum.CREATE_ITEM_FAILED,
    payload: string
}


export interface UpdateItemRequestAction {
    type: BlogActionEnum.UPDATE_ITEM_REQUEST,
    payload: IBlog
}

export interface UpdateItemSuccessAction {
    type: BlogActionEnum.UPDATE_ITEM_SUCCESS,
    payload: IBlog
}

export interface UpdateItemFailedAction {
    type: BlogActionEnum.UPDATE_ITEM_FAILED,
    payload: string
}


export interface DeleteItemRequestAction {
    type: BlogActionEnum.DELETE_ITEM_REQUEST,
    payload: IBlog
}

export interface DeleteItemSuccessAction {
    type: BlogActionEnum.DELETE_ITEM_SUCCESS,
    payload: IBlog
}

export interface DeleteItemFailedAction {
    type: BlogActionEnum.DELETE_ITEM_FAILED,
    payload: string
}


export type BlogAction =
    GetAllRequestAction |
    GetAllSuccessAction |
    GetAllFailedAction |

    GetItemRequestAction |
    GetItemSuccessAction |
    GetItemFailedAction |

    CreateItemRequestAction |
    CreateItemSuccessAction |
    CreateItemFailedAction |

    UpdateItemRequestAction |
    UpdateItemSuccessAction |
    UpdateItemFailedAction |

    DeleteItemRequestAction |
    DeleteItemSuccessAction |
    DeleteItemFailedAction;

import { AppDispatch } from "../..";
import { Request } from "../../../models/Request";
import RequestsService from "../../../services/RequestService";

export interface RequestState {
  requests: Request[] | [];
  totalCount: number
}

enum RequestsActionsEnum {
  SET_REQUESTS = "SET_REQUESTS",
  UPDATE_REQUESTS = "UPDATE_REQUESTS",
  NEW_REQUESTS = "NEW_REQUESTS",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
}

export interface setRequests {
  type: RequestsActionsEnum.SET_REQUESTS;
  payload: Request[];
}

export interface newRequest {
  type: RequestsActionsEnum.NEW_REQUESTS;
  payload: Request;
}

export interface updateRequest {
  type: RequestsActionsEnum.UPDATE_REQUESTS;
  payload: Request;
}

export interface setTotalCount {
  type: RequestsActionsEnum.SET_TOTAL_COUNT;
  payload: number;
}

export type RequestAction = setRequests | newRequest | updateRequest | setTotalCount;

const initialState: RequestState = {
  requests: [],
  totalCount: 0
};

export default function RequestReducer(
  state = initialState,
  action: RequestAction
): RequestState {
  switch (action.type) {
    case RequestsActionsEnum.SET_REQUESTS: {
      return { ...state, requests: action.payload };
    }
    case RequestsActionsEnum.NEW_REQUESTS: {
      return {
        ...state,
        requests: [...state.requests, action.payload],
      };
    }
    case RequestsActionsEnum.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload
      }
    default:
      return state;
  }
}

export const RequestsActionCreators = {
  setRequests: (request: Request[]): setRequests => ({
    type: RequestsActionsEnum.SET_REQUESTS,
    payload: request,
  }),
  setTotalCount: (count: number): setTotalCount => ({
    type: RequestsActionsEnum.SET_TOTAL_COUNT,
    payload: count,
  }),
  newRequest: (request: Request): newRequest => ({
    type: RequestsActionsEnum.NEW_REQUESTS,
    payload: request,
  }),
  getRequests: () => async (dispatch: AppDispatch) => {
    let { data, status } = await RequestsService.getAll();
    if (status === 404) throw status;
    dispatch(RequestsActionCreators.setRequests(data));
    dispatch<any>(RequestsActionCreators.getTotalCount());
  },
  createRequest: (request: Request) => async (dispatch: AppDispatch) => {
    const { data } = await RequestsService.create(request);
    dispatch(RequestsActionCreators.newRequest(data));
    dispatch<any>(RequestsActionCreators.getTotalCount());
  },
  removeRequest: (id: string) => async (dispatch: AppDispatch) => {
    await RequestsService.remove(id);
    dispatch<any>(RequestsActionCreators.getRequests());
    dispatch<any>(RequestsActionCreators.getTotalCount());
  },
  fetchUpdateRequest:
    (id: string, request: Request) => async (dispatch: AppDispatch) => {
      await RequestsService.update(id, request);
      dispatch<any>(RequestsActionCreators.getRequests());
    },
  getTotalCount:
    () => async (dispatch: AppDispatch) => {
      const {data} = await RequestsService.count();
      dispatch(RequestsActionCreators.setTotalCount(data));
    },
};

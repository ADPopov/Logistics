import { AuthActionCreators } from "./reducers/auth";
import { RequestsActionCreators } from "./reducers/requests";

export const allActionCreators = {
  ...RequestsActionCreators,
  ...AuthActionCreators,
};
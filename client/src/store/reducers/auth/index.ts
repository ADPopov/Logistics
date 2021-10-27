interface AuthState {
  isAdmin: boolean;
}

const initialState: AuthState = {
  isAdmin: false,
};

enum AuthActionEnum {
  SET_IS_ADMIN = "SET_IS_ADMIN",
}

interface setRole {
  type: AuthActionEnum.SET_IS_ADMIN;
  payload: boolean;
}

type AuthActions = setRole;

export const AuthReducer = (
  state = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_IS_ADMIN:
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};

export const AuthActionCreators = {
  setRole: (role: boolean): setRole => ({
    type: AuthActionEnum.SET_IS_ADMIN,
    payload: role,
  }),
};

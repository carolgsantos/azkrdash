export const Types = {
    LOGIN: "auth/LOGIN",
    LOGOUT: "auth/LOGOUT",
  };
  
  const INITIAL_STATE = {
    authenticated: false,
    components: null,
    itemsMenu: null,
    token: null,
    credentials: {},
    pKey: null,
  };
  
  export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case Types.LOGIN:
        return {
          ...state,
          authenticated: true,
        };
      case Types.LOGOUT:
        return INITIAL_STATE;
      default:
        return state;
    }
  }
  
  /**
   * Actions
   */
  
  export const Creators = {
    loginAuth: (username, password) => {
      return {
        type: Types.LOGIN,
        payload: {
          username,
          password,
        },
      };
    },
    logoutAuth: () => {
      return {
        type: Types.LOGOUT,
      };
    },
  };
  
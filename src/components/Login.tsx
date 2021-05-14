import { useEffect, useReducer } from "react";

//Interfaces & Types
interface AuthState {
  validation: boolean;
  token: string | null;
  username: string;
  name: string;
}

type LoginPayload = { token: string; username: string; name: string };

type AuthAction =
  | {
      type: "logout";
    }
  | {
      type: "login";
      payload: LoginPayload;
    };

//Initial State
const initialState: AuthState = {
  validation: true,
  token: null,
  username: "",
  name: "",
};

//Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validation: false,
        token: null,
        username: "",
        name: "",
      };
    case "login":
      return {
        validation: false,
        token: action.payload.token,
        username: action.payload.username,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

//Component
export const Login = () => {
  const [{ validation, token, username, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        token: "afsdfgfdgf",
        username: "@eren9",
        name: "Eren Jeager",
      },
    });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "logout",
      });
    }, 1500);
  }, []);

  if (validation)
    return (
      <>
        <h3 className="mb-3">Login con useReducer</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );

  return (
    <>
      <h3 className="mb-3">Login con useReducer</h3>

      {token ? (
        <div className="alert alert-success">Autenticado como: {name}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {token ? (
        <button className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};

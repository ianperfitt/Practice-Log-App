import { createAction, props } from "@ngrx/store";


export enum AuthActions {
  LOGIN = '[AUTH] Login',
  SET_TOKEN = '[AUTH] Set Token',
  CREATE_USER = '[AUTH] Create User',
  LOGIN_ERROR = 'LOGIN_ERROR',
  REGISTER_ERROR = 'REGISTER_ERROR',
  REMOVE_LOGIN_ERROR = 'REMOVE_LOGIN_ERROR'
}

export const setToken = createAction(
    AuthActions.SET_TOKEN,
    props<{ token: string }>()
);

export const setLoginError = createAction(
    AuthActions.LOGIN_ERROR,
    props<{ error: any}>()
)

export const setRegisterError = createAction(
  AuthActions.REGISTER_ERROR,
  props<{ error: any}>()
)

export const removeError = createAction(
  AuthActions.REMOVE_LOGIN_ERROR,
  props<{ error: any}>()
)


import { createReducer, on } from '@ngrx/store';
import { removeError, setLoginError, setRegisterError, setToken } from './auth.actions';

export interface AuthState {
    token: string;
    error: any
}

export const initialState: AuthState = {
    token: "",
    error: null
}

export const authReducer = createReducer(
  initialState,
  on(setToken, (state, { token }) => { return {...state, token}}),
  on(setLoginError, (state, { error }) => { return {...state, error}}),
  on(setRegisterError, (state, { error }) => { return {...state, error}}),
  on(removeError, (state, { error }) => { return {...state, error}})

  );

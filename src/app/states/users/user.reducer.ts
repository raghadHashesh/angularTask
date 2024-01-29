import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { initialUserState } from './user.state';

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(UserActions.loadSpinner, (state,action) => ({
    ...state,
    loading: action.loading,
  }))
);

import { createSelector } from '@ngrx/store';
import { UserState } from './user.state';


export const selectUsersState = (state: { users: UserState }) => state.users;

export const selectUsers = createSelector(
    (state: UserState) => state.users,
    (userState) => userState
  );

export const selectLoading = createSelector(
  selectUsersState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUsersState,
  (state) => state.error
);

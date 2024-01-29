import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ pageNumber: number }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
export const loadSpinner = createAction(
  '[User] Load Spinner',
  props<{ loading:boolean}>()
);
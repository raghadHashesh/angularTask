import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './user.actions';
import { UsersService } from 'src/app/services/users.service';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),

      mergeMap((action) =>
        this.userService.getUsers(action.pageNumber).pipe(
          map(users => 
            UserActions.loadUsersSuccess({ users })),
          catchError(error => of(UserActions.loadUsersFailure({ error }),
          ))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UsersService
  ) { }
}

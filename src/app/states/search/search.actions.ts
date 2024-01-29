import { createAction, props } from '@ngrx/store';

export const setSearchValue = createAction(
    'setSearchValue',
    props<{ searchValue: string }>()
);
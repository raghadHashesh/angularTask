import { createReducer, on } from '@ngrx/store';
import { setSearchValue } from './search.actions';

export interface SearchState {
    searchValue: string;
}

export const initialSearchState: SearchState = {
    searchValue: ''
};


export const searchReducer = createReducer(
    initialSearchState,
    on(setSearchValue,(state,{searchValue})=>({...state,searchValue:searchValue}))
);
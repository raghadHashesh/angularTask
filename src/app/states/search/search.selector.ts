
import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/states/search/app.state";

export const changesearch =(state:AppState)=>state.searchValue
export const selectSearch= createSelector(changesearch,(state)=>state.searchValue)
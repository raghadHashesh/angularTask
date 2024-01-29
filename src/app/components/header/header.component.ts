import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/search/app.state';
import { setSearchValue } from 'src/app/states/search/search.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private store: Store<AppState>) { }


  //when the user enter in the search box the value will dispatch to store
  onInputChange(searchValue: any) {
    const value = (searchValue as HTMLInputElement).value;
    this.store.dispatch(setSearchValue({ searchValue:value}));
  }

}

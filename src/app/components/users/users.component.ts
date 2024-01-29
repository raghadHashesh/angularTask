import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { AppState } from 'src/app/states/search/app.state';
import { selectSearch } from 'src/app/states/search/search.selector';
import { loadSpinner, loadUsers } from 'src/app/states/users/user.actions';
import { selectUsers } from 'src/app/states/users/user.selector';
import { UserState } from 'src/app/states/users/user.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  usersArray: User[] = [];
  usersSubscription: Subscription | undefined;
  loading: boolean = false;
  data: any;
  searchId!: number;
  userSearch!: User;
  isSearch: boolean = false;
  undefinedUser: boolean = false;
  searchValue$ = new BehaviorSubject<string>('');
  page: boolean = false;

  users$ = new BehaviorSubject<User[]>([]);



  constructor(private users: UsersService, private route: Router,
    private store: Store<AppState>, private storee: Store<UserState>) {
    this.store.pipe(select(selectSearch)).subscribe((res: any) => {
      this.searchId = +res
      this.searchValue$.next(res)
      this.searchUser()
    });


    this.storee.pipe(select(selectUsers)).subscribe((res: any) => {
      this.users$.next(res.users.users)
      this.usersArray = res.users.users
    })
  }

  ngOnInit() {
    this.loadUsers(1);
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.usersSubscription?.unsubscribe();
  }
  // Load users for spesific page
  loadUsers(pageNumber: number) {
    this.store.dispatch(loadUsers({ pageNumber: pageNumber }));
  }


  // navigate to user info page to show user details 
  getUser(id: number) {
    this.route.navigate([`users/${id}`])
  }

  // show the previose page (page1)
  previouspage() {
    this.loadUsers(1);
    this.page = false;
  }

  //show the next page (page2)
  nextPage() {
    this.loadUsers(2);
    this.page = true;
  }

  // to search for specific user using id
  searchUser() {
    this.searchValue$.subscribe(searchValue => {
      if (searchValue != undefined && searchValue != '') {
        this.isSearch = true;
        this.searchId = Number(searchValue);
        let result = this.usersArray.find(((ele: User) => {
          return ele == this.usersArray[this.searchId - 1];
        }))
        if (result != undefined) {
          this.undefinedUser = false;
          this.userSearch = result;
        }
        else {
          this.undefinedUser = true;
        }
      }
      else {
        this.isSearch = false;
        this.undefinedUser = false;
      }
    });
  }
}

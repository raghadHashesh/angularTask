import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { AppState } from 'src/app/states/search/app.state';
import { selectSearch } from 'src/app/states/search/search.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  userId!: number;
  userInfo: User = { id: 0, email: '', first_name: '', last_name: '', avatar: '' };
  loading: boolean = false;
  isSearch: boolean = false;
  undefinedUser: boolean = false;
  searchId!: number;
  userSearch!: User;
  searchValue$!: Observable<string>;
  constructor(private users: UsersService, private route: Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {
    this.searchValue$ = this.store.pipe(select(selectSearch));
  }

  ngOnInit() {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getUserInfo(this.userId);
    this.searchUser();
  }

  //show user details based on the id passed in the route
  getUserInfo(userId: number) {
    this.users.getUserInfo(userId).subscribe(res => {
      this.loading = true;
      this.userInfo = res.data;
      this.loading = false;
    })
  }


  // search for specific user and show his details here
  searchUser() {
    this.searchValue$.subscribe(searchValue => {
      if (searchValue != undefined && searchValue != '') {
        this.searchId = Number(searchValue);
        this.route.navigate([`/users/${this.searchId}`]);
        this.getUserInfo(this.searchId);
      }
    });
  }

}

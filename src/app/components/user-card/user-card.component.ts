import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
//get the data from parrent component (users)
  @Input() user!: User;
}

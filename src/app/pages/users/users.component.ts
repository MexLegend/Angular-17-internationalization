import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../core/services/user.service';
import { AsyncPipe } from '@angular/common';
import { UserItemComponent } from '../../components/user-item/user-item.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe, UserItemComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  public users$!: Observable<User[]>;

  private _userService: UserService = inject(UserService);

  ngOnInit(): void {
    this.users$ = this._userService.getUsers();
  }
}

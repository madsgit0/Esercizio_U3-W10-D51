import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(resp => this.userList= resp);
  }
  removeUser(user:User){
    this.userService.removeUser(user.id).subscribe(resp =>{
      this.userList = this.userList.filter(ele => ele.id != user.id)
    });

  }
}

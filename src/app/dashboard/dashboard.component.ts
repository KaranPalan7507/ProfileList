import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users: UserModel[] = [];
  displayedColumns: string[] = ['profile', 'name', 'userName'];
  dataSource: MatTableDataSource<UserModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    if (this.userService.getUsers()) {
      this.users = this.userService.getUsers();
    } else {
      this.userService.getUsersFromApi().then(
        res => {
          this.users = res.json().map(userData => new UserModel(userData));
          this.dataSource = new MatTableDataSource(this.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        });
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  routeToDetailsPage(user:UserModel){
    this.userService.setSlectedUser(user);
    this.router.navigateByUrl("/detail",{ skipLocationChange: true });
  }

}

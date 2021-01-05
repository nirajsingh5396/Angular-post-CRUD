import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationAlertComponent } from '../shared/confirmation-alert/confirmation-alert.component';
import { IPosts } from '../shared/models/posts.model';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<IPosts>([]);
  displayedColumns: string[] = [
    'id',
    'userId',
    'title',
    'body',
    'action'
  ];

  constructor(
    private postsService: PostsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe(posts => {
      this.dataSource.data = posts;
      this.dataSource.paginator = this.paginator;
    });
  }

  onDeletePost(id: number) {
    const data = { title: 'Are you sure want to delete this post?' };
    const dialogRef = this.dialog.open(ConfirmationAlertComponent, { data: data, disableClose: true });
    dialogRef.afterClosed().subscribe((res) => {
      if (res.state === true) {
        this.postsService.deletePost(id).subscribe(res =>{
          this.getPosts();
        })
       }
    });

  }



}

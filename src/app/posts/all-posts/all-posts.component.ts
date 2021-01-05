import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ConfirmationAlertComponent } from 'src/app/shared/confirmation-alert/confirmation-alert.component';
import { IPosts } from 'src/app/shared/models/posts.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

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
    private notify: NotificationService
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
        this.postsService.deletePost(id).subscribe(res => {
          this.notify.showNotification('Api call has been made successfully, but it does not delete as It is mock rest api', 'top', 'error');
          this.getPosts();
        })
      }
    }, (err) => {
      this.notify.showNotification('Something went wrong', 'top', 'error');
    });

  }


}

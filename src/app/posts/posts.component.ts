import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
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
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.dataSource.data = posts;
      this.dataSource.paginator = this.paginator;
    });
  }



}

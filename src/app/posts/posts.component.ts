import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  showIds = false;

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = !!params.showIds;
    });
  }

  toggleShowIds() {
    this.router.navigate(['/posts'], { queryParams: { showIds: true } });
  }
}

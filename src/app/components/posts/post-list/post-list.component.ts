import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";
import { Post } from "../post.model";
import { PostService } from "../posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" },
  // ];

  constructor(public postService: PostService) {}
  posts: Post[] = [];
  private postsSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService
      .getPostsUpdated()
      .subscribe((post: Post[]) => {
        this.posts = post;
      });
  }
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}

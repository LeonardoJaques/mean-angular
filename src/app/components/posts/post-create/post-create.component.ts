import { Component, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post.model";
import { PostService } from "../posts.service";
@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"],
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
  postCreated = new EventEmitter<Post>();

  constructor(public postService: PostService) {}

  ondAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
  }
}

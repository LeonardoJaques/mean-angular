import { Component } from "@angular/core";
import { Post } from "./components/posts/post.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  storagePosts: Post[] = [];
  onPostAdded(post: Post) {
    this.storagePosts.push(post);
  }
}

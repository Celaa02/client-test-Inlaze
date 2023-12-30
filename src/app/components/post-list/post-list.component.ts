import { Component , OnInit} from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/Post';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit{

  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private router: Router){}
  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this.postService.getPots()
    .subscribe(
      res => {
        console.log(res)
        this.posts = res;
      },
      err => console.log(err)
    )
  }

  deletePost(id: string){
    this.postService.deletePost(id)
    .subscribe(
      res => (
        this.getPosts()
      ),
      err => console.log(err)
    )
  }

  putPost(id: string){
    return this.router.navigate([`/inzale/post/${id}`])
  }
}

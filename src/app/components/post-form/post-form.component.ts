import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/Post';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {

  post: Post = {
    _id:'',
    user: '',
    userto: '',
    title: '',
    content: ''
  };

  edit: boolean = false;

  constructor(
    private postSevice: PostService,
    private router: Router,
    private active: ActivatedRoute
    ){}

  ngOnInit(){
   const params =  this.active.snapshot.params;
    console.log(params)
    if(params){
      this.postSevice.getPost(params['id'])
      .subscribe(
        res => {
          console.log(res)
          this.post = res;
          this.edit = true;
        }
      )
    }

  }
  submitPost(){
    this.postSevice.createPost(this.post)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  updatePost(){
    this.postSevice.updatePost(this.post._id, this.post)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, RouterLink} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HttpClientModule,
     FormsModule, RouterModule, RouterLink], 
  providers: [PostService, UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}

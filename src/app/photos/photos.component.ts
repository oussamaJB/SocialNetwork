import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {Post} from '../Post';
import {DataService} from '../data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  // Test cases for the component, these objects should be generated by services

  amy = new User('Amy', '/assets/images/resources/admin.jpg');
  alexis = new User('Alexis', '/assets/images/resources/nearly1.jpg');
  sarah = new User('Sarah', '/assets/images/resources/nearly6.jpg');
  users = new Map<string, string>([
    [this.amy.userName, this.amy.userIconURL],
    [this.alexis.userName, this.alexis.userIconURL],
    [this.sarah.userName, this.sarah.userIconURL]
  ]);
  comments1 = [
    ['Sarah', 'Oh my god, you look amazing dear! Look at them beautiful blue eyes shining like diamonds!'],
    ['Alexis', 'Oh you are so cute !']
  ];
  comments2 = [
    ['Sarah', 'Why didn\'t you take me with you in this trip?'],
    ['Amy', 'This is heaven on earth!']
  ];
  post1 = new Post(this.amy, 'Having fun in San Francisco!', '/assets/images/resources/photo-22.jpg', '2021-05-01  16:40', 2500, this.comments1);
  post2 = new Post(this.alexis, 'Having fun in New York!', '/assets/images/resources/photo-33.jpg', '2021-04-30  18:32', 2200, this.comments2);
  post3 = new Post(this.alexis, 'Having fun in New York!', '/assets/images/resources/photo-44.jpg', '2021-04-30  18:32', 2200, this.comments2);
  post4 = new Post(this.alexis, 'Having fun in New York!', '', '2021-04-30  18:32', 2200, this.comments2);
  post5 = new Post(this.alexis, 'Having fun in New York!', '/assets/images/resources/photo-55.jpg', '2021-04-30  18:32', 2200, this.comments2);
  posts = [this.post1, this.post2,this.post3,this.post4,this.post5];

  // End of test cases

  postsWithPhotos = this.data.posts.filter( post => !(post.postImgURL === ''));

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}

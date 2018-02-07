import { Component, OnInit } from '@angular/core';
import { Ng2TweetService } from 'ng2-tweet/lib/index'


@Component({
  selector: 'app-twitter-embed',
  templateUrl: './twitter-embed.component.html',
  styleUrls: ['./twitter-embed.component.css']
})
export class TwitterEmbedComponent implements OnInit {

  constructor(private ng2TwwetService: Ng2TweetService) { }

  ngOnInit() {
  }

}

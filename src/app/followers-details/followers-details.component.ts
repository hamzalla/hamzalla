import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers-details',
  templateUrl: './followers-details.component.html',
  styleUrls: ['./followers-details.component.css']
})
export class FollowersDetailsComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }
  params: string;
  id:number;
  type:string;
  name:string;

  ngOnInit() {
    /*this.route.paramMap.subscribe(params => {
      this.params = params.get("username");
      this.id = +params.get("id"); //if params is number type we add +
    })*/
    this.params = this.route.snapshot.paramMap.get("username");
    this.id = +this.route.snapshot.paramMap.get("id");

    /*this.route.queryParamMap.subscribe(query => {
      this.type = query.get("type");
      this.name = query.get("name");
    })*/

    this.type = this.route.snapshot.queryParamMap.get("type");
    this.name = this.route.snapshot.queryParamMap.get("name");

  }

}

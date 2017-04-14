import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-guest-details',
  templateUrl: './task-guest-details.component.html',
  styleUrls: ['./task-guest-details.component.css']
})
export class TaskGuestDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.route.params
    .subscribe((param)=>{
      console.log(param);
    })
  }

}

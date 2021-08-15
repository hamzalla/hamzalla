import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectinput = [{id:1, name:"Hamza"}, {id:2, name:"Doha"}, {id:3, name:"ok"}]
  
  submit(form){
    console.log(form.value);
    
  }
}

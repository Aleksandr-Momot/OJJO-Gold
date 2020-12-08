import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit {

  show = false;

  constructor() { }

  ngOnInit(): void {

  }
  toggle(){
    this.show=!this.show;
}

}

 
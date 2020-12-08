import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit {

  show = true;

  constructor() { }

  ngOnInit(): void {

  }
  toggle(){
    this.show=!this.show;
}

}

 
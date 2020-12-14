
import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit {

  show = true;

  visible = false;

  constructor() { }

  ngOnInit(): void {

  }
  
  isPasswordVisible = true;

  toggle()  {
      this.show=!this.show;
      this.visible=!this.visible;
  }


}
 
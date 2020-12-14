import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const LIST: string[] = [
  'первый пункт'
];

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  form: FormGroup;
  public list: string[] = LIST;

  public activeItem: string;

  toggle = true;
  btnText = "ЧИТАТЬ ДАЛЕЕ"
  inhide = true

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl()
   });
  }

  public onSelectItem(item: string): void {
    this.activeItem = item;
  }

  changeText(toggle:boolean) {
    return toggle ? this.btnText : "скрыть"
  }

}


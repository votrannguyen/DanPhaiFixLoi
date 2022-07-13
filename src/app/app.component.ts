import { Component } from '@angular/core';
import { customer } from './customer/customer';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module';
  name = 'votrannguyen';
  isDisabled = true;
  clearValue(){
    this.name = '';
  }
}

import { Component } from '@angular/core';
import { NgxHttpLoaderService } from 'ngx-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-loader';
  constructor(service: NgxHttpLoaderService){
    service.show();
  }
}

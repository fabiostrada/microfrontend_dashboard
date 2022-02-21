import { Component, OnInit } from '@angular/core';
import { StateService } from 'my-authenticator-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  public property1!: string;

  constructor(private stateService: StateService) {

  }

  ngOnInit(): void {
      this.property1 = this.stateService.getProperty1();
  }

}

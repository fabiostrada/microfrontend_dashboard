import { Component, OnInit } from '@angular/core';
import { EventService, StateService, LanguageConfig } from 'my-authenticator-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public property1!: string;
  public language!: string;
  public languageConfig = LanguageConfig;

  constructor(private stateService: StateService,
              private eventService: EventService) {
  }

  ngOnInit(): void {
      this.property1 = this.stateService.getProperty1();
  }

  public selectLanguage() {
    if (!!this.language) {
        this.eventService.setLanguage(this.language);
    }
  }

}

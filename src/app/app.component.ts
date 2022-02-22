import { Component, OnInit } from '@angular/core';
import { EventService, StateService, LanguageConfig, BaseComponent } from 'my-authenticator-lib';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  
  public property1!: string;
  public language!: string;
  public languageConfig = LanguageConfig;

  constructor(private stateService: StateService,
              private eventService: EventService) {
      super();
  }

  ngOnInit(): void {
      this.property1 = this.stateService.getProperty1();
      this.eventService.getLanguage()
          .pipe(takeUntil(this.unsubscribeAll))
          .subscribe(language => {
              this.language = language;            
          })
  }

  public selectLanguage() {
    if (!!this.language) {
        this.eventService.setLanguage(this.language);
    }
  }

}

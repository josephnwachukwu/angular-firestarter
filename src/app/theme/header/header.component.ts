import { Component } from '@angular/core';
import { AppConfigService } from '../../app.config';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  show = false;
  constructor(public auth: AuthService, public appConfig: AppConfigService) {

  }
  toggleCollapse() {
    this.show = !this.show;
  }

}

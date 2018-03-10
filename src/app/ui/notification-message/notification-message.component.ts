import { Component, ViewEncapsulation } from '@angular/core';

import { NotifyService } from '../../auth/notify.service';

@Component({
  selector: 'notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NotificationMessageComponent {

  constructor(public notify: NotifyService) { }

}

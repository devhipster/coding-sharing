import { Component } from '@angular/core';
import {createId} from 'shared';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sharing';
  myId = createId(42)
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-awesome-button',
  templateUrl: './awesome-button.component.html',
  styleUrls: ['./awesome-button.component.css']
})
export class AwesomeButtonComponent {
  @Input() buttonTest = ''
}

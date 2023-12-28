import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.scss'
})
export class SeparatorComponent {
  @Input() separatorWidth = 1;
  @Input() separatorHeight = 40;
  @Input() separatorSpacing = 5;
  @Input() separatorBackground = 'black'

  separatorStyles = {
    width: this.separatorWidth + "px",
    height: this.separatorHeight + "px",
    margin: "0 " + this.separatorSpacing + "px",
    backgroundColor: this.separatorBackground
  }
}

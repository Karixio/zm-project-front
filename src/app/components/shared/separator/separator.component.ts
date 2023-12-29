import {Component, HostBinding, Input} from '@angular/core';
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
  @HostBinding('style.width') @Input() separatorWidth = "1px";
  @HostBinding('style.height') @Input() separatorHeight = "40px";
  @HostBinding('style.margin') @Input() separatorMargin = "0 5px";
  @HostBinding('style.backgroundColor') @Input() separatorBackground = '#4A4E69'
  @HostBinding('style.display') @Input() separatorDisplay = 'block'
}

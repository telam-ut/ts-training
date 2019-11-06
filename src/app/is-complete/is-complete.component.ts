import { Component, Input } from '@angular/core';

@Component({
  selector: 'is-complete',
  templateUrl: './is-complete.component.html',
})
export class IsCompleteComponent {
  @Input() isComplete = false;

  @Input() isAggregate = false
}

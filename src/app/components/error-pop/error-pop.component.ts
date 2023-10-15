import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-pop',
  templateUrl: './error-pop.component.html',
  styleUrls: ['./error-pop.component.scss']
})
export class ErrorPopComponent {
  @Input() error !: string;

  clearError(){
    this.error = '';
  }
}

import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  localKey !: string;
  @Output() newKeyEvent = new EventEmitter<string>();
  @Input() clicked : boolean = false;

  addNewKey(value : string){
    this.clicked = false
    this.newKeyEvent.emit(value);
  }
}

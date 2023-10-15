import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ai-generator';
  key !: string;

  addKey(newKey : string) {
    this.key = newKey;
  }
}

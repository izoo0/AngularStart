import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}
)
export class AppComponent {
  title = 'Home';
  content = 'Hello there';
  display = true;

  onClick(){
    this.display = false;
  }
}

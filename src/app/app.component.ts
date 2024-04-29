import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This is the tag used in index.html
  templateUrl: './app.component.html', // The HTML for the component
  styleUrls: ['./app.component.css'] // The CSS for the component
})
export class AppComponent {
  title = 'Breathe with Bella'; // A property that can be used in the component's HTML
  description = 'V1.0'

  constructor() {
    // This is where you might inject services or perform initial setup
  }

  someMethod() {
    // Method that performs some action
  }
}
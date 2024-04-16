import { Component } from '@angular/core';

@Component({
  selector: 'app-input-words',
  standalone: true,
  imports: [],
  templateUrl: './input-words.component.html',
  styleUrl: './input-words.component.css'
})
export class InputWordsComponent {

  userInput: string = '';

  onUserInput(event: Event) {
    //echo αυτό που γράφει ο χρήστης -> το βαζει από κάτω
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
  }

  onReset() {
    // this.userInput = null;
    // (event.target as HTMLInputElement).value = '';
    console.log('reset', this.userInput)
    this.userInput = '';
    
    console.log('reset after', this.userInput)
  }
}

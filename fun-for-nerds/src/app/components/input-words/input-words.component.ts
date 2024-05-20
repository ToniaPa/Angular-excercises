import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-words',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
  ],
  templateUrl: './input-words.component.html',
  styleUrl: './input-words.component.css'
})
export class InputWordsComponent {

  userInput: string = '';    
  
  @ViewChild('userInsert') inputInsert: ElementRef;

  @Output() userData = new EventEmitter<string>;

  onUserInput(event: Event) {
    //echo αυτό που γράφει ο χρήστης -> το βαζει από κάτω    
    this.userInput = (event.target as HTMLInputElement).value;
    console.log('onReset', this.userInput)    
  }

  onSubmit() {   
    console.log('onSumbit: ', this.userInput)
    this.userData.emit(this.userInput); //emit (send) to app component 
  }

  onReset() {
    console.log('onReset: ', this.userInput)
    this.userInput = '';  
    console.log('onReset after: ', this.userInput)
    this.inputInsert.nativeElement.value = "";
    // (document.getElementById('userInsert') as HTMLInputElement).value
  }

}

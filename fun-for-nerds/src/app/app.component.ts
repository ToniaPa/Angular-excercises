import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputWordsComponent } from './components/input-words/input-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputWordsComponent,
    OddLengthWordsComponent,
    EvenLengthWordsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'fun-for-nerds';
  //
  
  userWord: string ='';

  oddWords: string[] = [];
  evenWords: string[] = [];  

  getUserInput(userInput: string) {
    this.userWord = userInput;
    console.log("getUser Input from parent app: ", this.userWord);
    if (this.userWord.length % 2 !== 0 ) {
      this.oddWords.push(this.userWord);
    } else {
      this.evenWords.push(this.userWord);
    }
  }
}

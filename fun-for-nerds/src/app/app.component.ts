import { Component } from '@angular/core';
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
}

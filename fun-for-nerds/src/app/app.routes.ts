import { Routes } from '@angular/router';
import { InputWordsComponent } from './components/input-words/input-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';

export const routes: Routes = [
  {path: 'input-words', component: InputWordsComponent},
  {path: 'odd-length-words', component: OddLengthWordsComponent},
  {path: 'even-length-words', component: EvenLengthWordsComponent},
];

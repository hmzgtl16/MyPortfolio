import { Component } from '@angular/core';
import { Header } from './component/header/header';
import { Home } from './component/home/home';

@Component({
  selector: 'app-root',
  imports: [Header, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

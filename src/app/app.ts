import { Component } from '@angular/core';
import { Header } from './component/header/header';
import { Home } from './component/home/home';
import { About } from './component/about/about';

@Component({
  selector: 'app-root',
  imports: [Header, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

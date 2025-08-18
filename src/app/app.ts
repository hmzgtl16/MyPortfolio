import { Component } from '@angular/core';
import { Header } from './component/header/header';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Services } from './component/services/services';
import { Projects } from './component/projects/projects';

@Component({
  selector: 'app-root',
  imports: [Header, Home, About, Services, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

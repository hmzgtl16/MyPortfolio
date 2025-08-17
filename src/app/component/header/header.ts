import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCircleHalfStroke, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menu = faBars;
  dark = faMoon;
  light = faSun;
  followSystem = faCircleHalfStroke;
}

import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {NgOptimizedImage} from '@angular/common';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-projects',
  imports: [
    NgOptimizedImage,
    FaIconComponent
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  faGithub = faGithub;

  private project1Link = 'https://github.com/hmzgtl16/OAuth2System'
  private project2Link = 'https://github.com/hmzgtl16/HBank-API'
  private project3Link = 'https://github.com/hmzgtl16/HNotes'
  private project4Link = 'https://github.com/hmzgtl16/HBookStore'

  openProject1Link() {
    window.open(this.project1Link, '_blank');
  }

  openProject2Link() {
    window.open(this.project2Link, '_blank');
  }

  openProject3Link() {
    window.open(this.project3Link, '_blank');
  }

  openProject4Link() {
    window.open(this.project4Link, '_blank');
  }
}

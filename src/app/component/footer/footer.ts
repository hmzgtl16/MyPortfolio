import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
    imports: [
        FaIconComponent
    ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  protected readonly faEnvelope = faEnvelope;
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faWhatsapp = faWhatsapp;

  currentYear: number = new Date().getFullYear();

  private githubLink = 'https://github.com/hmzgtl16'
  private linkedinLink = 'https://www.linkedin.com/in/hmzgtl16/';
  private whatsapp = ''

  protected openGithub() {
    window.open(this.githubLink, '_blank');
  }

  protected openLinkedin() {
    window.open(this.linkedinLink, '_blank');
  }

  protected openWhatsapp() {
    window.open(this.whatsapp, '_blank');
  }
}

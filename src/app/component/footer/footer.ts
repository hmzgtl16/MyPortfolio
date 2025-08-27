import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

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
  protected readonly faTelegram = faTelegram;
  protected readonly faWhatsapp = faWhatsapp;

  currentYear: number = new Date().getFullYear();
}

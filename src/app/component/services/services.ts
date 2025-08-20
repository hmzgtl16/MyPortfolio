import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  imports: [
    FaIconComponent
  ],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  faAndroid = faAndroid;
  faCode = faCode;
  faGear = faGear;
}

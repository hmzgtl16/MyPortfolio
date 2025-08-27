import { Component } from '@angular/core';
import { faLock, faMoneyBillTransfer, faNoteSticky, faStore } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-projects',
  imports: [ FaIconComponent ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  faLock = faLock;
  faMoneyBillTransfer = faMoneyBillTransfer;
  faNoteSticky = faNoteSticky;
  faStore = faStore;
}

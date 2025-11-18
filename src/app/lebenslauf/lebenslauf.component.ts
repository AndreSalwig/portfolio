import { Component, input, signal } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-lebenslauf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lebenslauf.component.html',
  styleUrl: './lebenslauf.component.css'
})
export class LebenslaufComponent {

  showSupervisorInfo = false;
  showInformatikInfo = false;
  showSignalIdunaInfo = false;
  showMechatronikInfo = false;
  showAbiInfo = false;
  showGrundschule = signal<boolean>(false);

  toggleGrundschule() {
    this.showGrundschule.set(!this.showGrundschule());
  }
}

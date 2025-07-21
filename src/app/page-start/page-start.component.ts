import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-start',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './page-start.component.html',
  styleUrl: './page-start.component.css'
})
export class PageStartComponent {
  input = '';
  outputLines: string[] = ['Willkommen im Terminal. Tippe "help" für Optionen.'];

  handleCommand(): void {
    const command = this.input.trim().toLowerCase();
    this.outputLines.push(`$ ${command}`);
    this.input = '';

    switch (command) {
      case 'help':
        this.outputLines.push('Verfügbare Befehle: help, aboutme, lebenslauf, kontakt. Maybe more :D');
        break;
      case 'aboutme':
        this.outputLines.push('Lets gooo...');
        setTimeout(() => {
          this.scrollToSection('aboutMe');
        }, 1000);
  
        break;
      case 'lebenslauf':
        this.outputLines.push('Ahh... wo war ich nochmal in der Grundschule?');
         setTimeout(() => {
          this.scrollToSection('lebenslauf');
        }, 1500);
        break;
      case 'kontakt':
       this.outputLines.push('Call me 📞 ❤️');
        setTimeout(() => {
          this.scrollToSection('kontakt');
        }, 1000);
        break;
      case 'sudo make me a sandwich':
        this.outputLines.push('Okay. 🍔');
        break;
      default:
        this.outputLines.push('Was zur Hölle ???');
        break;
    }
  }
  scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
}

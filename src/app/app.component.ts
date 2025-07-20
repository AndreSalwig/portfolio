import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageStartComponent } from './page-start/page-start.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LebenslaufComponent } from './lebenslauf/lebenslauf.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, PageStartComponent,AboutMeComponent, LebenslaufComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
import { Component} from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TypewriterComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent{

}

import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.css'
})
export class TypewriterComponent implements AfterViewInit {
  @Input() text: string = '';
  @Input() speed: number = 100;

  @ViewChild('textRef', { static: true }) textRef!: ElementRef;

  private hasAnimated = false;

  ngAfterViewInit() {
    const target = this.textRef.nativeElement as HTMLElement;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            if (entry.intersectionRatio >= 0.1) {
              this.startTyping(target);
              this.hasAnimated = true;
            }
          }
          if (!entry.isIntersecting){
            this.hasAnimated = false;
            target.textContent = "";
          }
        });
      },
      {
        threshold: [0, 0.1, 0.5, 1.0],
      }
    );

    observer.observe(target);
  }

  private startTyping(element: HTMLElement) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < this.text.length) {
        element.textContent += this.text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, this.speed);
  }
}

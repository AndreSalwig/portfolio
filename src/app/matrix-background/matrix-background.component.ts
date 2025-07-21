import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-matrix-background',
  standalone: true,
  imports: [],
  templateUrl: './matrix-background.component.html',
  styleUrl: './matrix-background.component.css'
})

export class MatrixBackgroundComponent implements AfterViewInit {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'アカサタナハマヤラワ0123456789ABCDEF'.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = new Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(0, 255, 0, 0.2)';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, 33);
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inputText;
  figure;
  canvas;
  currentFigure;
  ctx;

  constructor() {
  }

  ngOnInit(): void {
  }

  clear() {
    this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {
    this.canvas = document.getElementById('myCanvas') as HTMLElement;
    this.ctx = this.canvas.getContext('2d');
    const input = this.inputText.split('\n');
    console.log('input', input);
    for (const inputFigure of input) {
      this.currentFigure = inputFigure;
      const fig = inputFigure.split(' ');
      console.log(fig);
      this.figure = fig[0];
      console.log('figure: ', this.figure);
      switch (this.figure) {
        case 'line': {
          this.drawLine();
          break;
        }
        case 'rectangle': {
          this.drawRectangle();
          break;
        }
        case 'triangle': {
          this.drawTriangle();
          break;
        }
        case 'circle': {
          this.drawCircle();
          break;
        }
        case 'ellipse': {
          this.drawEllipse();
          break;
        }
      }
    }
  }

  drawLine() {
    if (this.canvas.getContext) {
      const options = this.currentFigure.split('-');
      console.log('options: ', options);
      const parameterCoord = options[1].split(' ');
      console.log('parameterCoord: ', parameterCoord);

      const x1 = Number(parameterCoord[1].replace(/\D/g, ''));
      const y1 = Number(parameterCoord[2].replace(/\D/g, ''));
      const x2 = Number(parameterCoord[3].replace(/\D/g, ''));
      const y2 = Number(parameterCoord[4].replace(/\D/g, ''));

      const parameterRGB = options[2].split(' ');
      console.log('parameterRGB: ', parameterRGB);
      const red = Number(parameterRGB[1].replace(/\D/g, ''));
      const blue = Number(parameterRGB[2].replace(/\D/g, ''));
      const green = Number(parameterRGB[3].replace(/\D/g, ''));

      const parameterRGBA = options[3].split(' ');
      const redBG = Number(parameterRGBA[1].replace(/\D/g, ''));
      const blueBG = Number(parameterRGBA[2].replace(/\D/g, ''));
      const greenBG = Number(parameterRGBA[3].replace(/\D/g, ''));
      const opacityBG = Number(parameterRGBA[4].replace(')', ''));
      // console.log(redBG, blueBG, greenBG, opacityBG);

      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.strokeStyle = 'rgb(' + red + ',' + blue + ',' + green + ')';
      this.ctx.fillStyle = 'rgba(' + redBG + ',' + blueBG + ',' + greenBG + ',' + opacityBG + ')';
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.stroke();


    }
  }

  drawRectangle() {
    if (this.canvas.getContext) {
      const options = this.currentFigure.split('-');
      console.log('options: ', options);
      const parameterCoord = options[1].split(' ');
      console.log('parameterCoord: ', parameterCoord);

      const x1 = Number(parameterCoord[1].replace(/\D/g, ''));
      const y1 = Number(parameterCoord[2].replace(/\D/g, ''));
      const x2 = Number(parameterCoord[3].replace(/\D/g, ''));
      const y2 = Number(parameterCoord[4].replace(/\D/g, ''));

      const parameterRGB = options[2].split(' ');
      console.log('parameterRGB: ', parameterRGB);
      const red = Number(parameterRGB[1].replace(/\D/g, ''));
      const blue = Number(parameterRGB[2].replace(/\D/g, ''));
      const green = Number(parameterRGB[3].replace(/\D/g, ''));

      const parameterRGBA = options[3].split(' ');
      const redBG = Number(parameterRGBA[1].replace(/\D/g, ''));
      const blueBG = Number(parameterRGBA[2].replace(/\D/g, ''));
      const greenBG = Number(parameterRGBA[3].replace(/\D/g, ''));
      const opacityBG = Number(parameterRGBA[4].replace(')', ''));
      // console.log(redBG, blueBG, greenBG, opacityBG);


      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y1);
      console.log(x2, y1);
      this.ctx.lineTo(x2, (x2 - y1));
      console.log(x2, (x2 - y1));
      this.ctx.lineTo(x1, (x2 - y1));
      this.ctx.strokeStyle = 'rgb(' + red + ',' + blue + ',' + green + ')';
      this.ctx.fillStyle = 'rgba(' + redBG + ',' + blueBG + ',' + greenBG + ',' + opacityBG + ')';
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.stroke();
    }

  }

  drawTriangle() {
    if (this.canvas.getContext) {
      const options = this.currentFigure.split('-');
      console.log('options: ', options);
      const parameterCoord = options[0].split(' ');
      console.log('parameterCoord: ', parameterCoord);

      const x1 = Number(parameterCoord[1].replace(/\D/g, ''));
      const y1 = Number(parameterCoord[2].replace(/\D/g, ''));
      const x2 = Number(parameterCoord[3].replace(/\D/g, ''));
      const y2 = Number(parameterCoord[4].replace(/\D/g, ''));
      const x3 = Number(parameterCoord[5].replace(/\D/g, ''));
      const y3 = Number(parameterCoord[6].replace(/\D/g, ''));

      const parameterRGB = options[1].split(' ');
      console.log('parameterRGB: ', parameterRGB);
      const red = Number(parameterRGB[1].replace(/\D/g, ''));
      const blue = Number(parameterRGB[2].replace(/\D/g, ''));
      const green = Number(parameterRGB[3].replace(/\D/g, ''));

      const parameterRGBA = options[2].split(' ');
      const redBG = Number(parameterRGBA[1].replace(/\D/g, ''));
      const blueBG = Number(parameterRGBA[2].replace(/\D/g, ''));
      const greenBG = Number(parameterRGBA[3].replace(/\D/g, ''));
      const opacityBG = Number(parameterRGBA[4].replace(')', ''));
      // console.log(redBG, blueBG, greenBG, opacityBG);

      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.lineTo(x3, y3);
      this.ctx.fillStyle = 'rgba(' + redBG + ',' + blueBG + ',' + greenBG + ',' + opacityBG + ')';
      this.ctx.strokeStyle = 'rgb(' + red + ',' + blue + ',' + green + ')';
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.stroke();


    }
  }

  drawCircle() {
    if (this.canvas.getContext) {
      const options = this.currentFigure.split('-');
      console.log('options: ', options);
      const parameterCoord = options[1].split(' ');
      console.log('parameterCoord: ', parameterCoord);

      const x1 = Number(parameterCoord[1].replace(/\D/g, ''));
      const y1 = Number(parameterCoord[2].replace(/\D/g, ''));
      const parameterRad = options[2].split(' ');
      const r = Number(parameterRad[1].replace(/\D/g, ''));

      const parameterRGB = options[3].split(' ');
      console.log('parameterRGB: ', parameterRGB);
      const red = Number(parameterRGB[1].replace(/\D/g, ''));
      const blue = Number(parameterRGB[2].replace(/\D/g, ''));
      const green = Number(parameterRGB[3].replace(/\D/g, ''));

      const parameterRGBA = options[4].split(' ');
      const redBG = Number(parameterRGBA[1].replace(/\D/g, ''));
      const blueBG = Number(parameterRGBA[2].replace(/\D/g, ''));
      const greenBG = Number(parameterRGBA[3].replace(/\D/g, ''));
      const opacityBG = Number(parameterRGBA[4].replace(')', ''));
      // console.log(redBG, blueBG, greenBG, opacityBG);

      this.ctx.beginPath();
      this.ctx.fillStyle = 'rgba(' + redBG + ',' + blueBG + ',' + greenBG + ',' + opacityBG + ')';
      this.ctx.strokeStyle = 'rgb(' + red + ',' + blue + ',' + green + ')';
      this.ctx.arc(x1, y1, r, 0, Math.PI * 2, false);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.stroke();

    }
  }

  drawEllipse() {
    if (this.canvas.getContext) {
      const options = this.currentFigure.split('-');
      console.log('options: ', options);
      const parameterCoord = options[1].split(' ');
      console.log('parameterCoord: ', parameterCoord);

      const x1 = Number(parameterCoord[1].replace(/\D/g, ''));
      const y1 = Number(parameterCoord[2].replace(/\D/g, ''));
      const parameterRad1 = options[2].split(' ');
      const r1 = Number(parameterRad1[1].replace(/\D/g, ''));
      const parameterRad2 = options[2].split(' ');
      const r2 = Number(parameterRad2[1].replace(/\D/g, ''));

      const parameterRGB = options[4].split(' ');
      console.log('parameterRGB: ', parameterRGB);
      const red = Number(parameterRGB[1].replace(/\D/g, ''));
      const blue = Number(parameterRGB[2].replace(/\D/g, ''));
      const green = Number(parameterRGB[3].replace(/\D/g, ''));

      const parameterRGBA = options[5].split(' ');
      const redBG = Number(parameterRGBA[1].replace(/\D/g, ''));
      const blueBG = Number(parameterRGBA[2].replace(/\D/g, ''));
      const greenBG = Number(parameterRGBA[3].replace(/\D/g, ''));
      const opacityBG = Number(parameterRGBA[4].replace(')', ''));
      // console.log(redBG, blueBG, greenBG, opacityBG);

      this.ctx.beginPath();
      this.ctx.fillStyle = 'rgba(' + redBG + ',' + blueBG + ',' + greenBG + ',' + opacityBG + ')';
      this.ctx.strokeStyle = 'rgb(' + red + ',' + blue + ',' + green + ')';
      this.ctx.translate(x1, y1); // ЦК
      this.ctx.scale(0.76, 1); // масштабирование
      this.ctx.arc(x1, y1, r1, r2, Math.PI * 2, true);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.stroke();
    }
  }
}





import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const slider: any = document.querySelector('.slider input') as HTMLElement;
    const img: any = document.querySelector('.images .image2') as HTMLElement;
    const dragline = document.querySelector('.slider .drag-line') as HTMLElement;

    slider.oninput = () => {
      const sliderVal = slider.value;
      dragline.style.left = sliderVal + '%';
      img.style.width = sliderVal + '%';
    };
  }

}

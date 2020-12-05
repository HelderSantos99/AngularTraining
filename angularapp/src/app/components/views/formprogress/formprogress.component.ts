import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formprogress',
  templateUrl: './formprogress.component.html',
  styleUrls: ['./formprogress.component.css'],
})
export class FormProgressComponent implements OnInit {
  ngOnInit(): void {
    const slidePage = document.querySelector('.slide-page') as HTMLElement;
    const nextBtnFirst = document.querySelector('.firstNext') as HTMLElement;
    const prevBtnSec = document.querySelector('.prev-1') as HTMLElement;
    const nextBtnSec = document.querySelector('.next-1') as HTMLElement;
    const prevBtnThird = document.querySelector('.prev-2') as HTMLElement;
    const nextBtnThird = document.querySelector('.next-2') as HTMLElement;
    const prevBtnFourth = document.querySelector('.prev-3') as HTMLElement;
    const submitBtn = document.querySelector('.submit') as HTMLElement;
    const progressText = document.querySelectorAll('.step p');
    const progressCheck = document.querySelectorAll('.step .check');
    const bullet = document.querySelectorAll('.step .bullet');
    let current = 1;

    nextBtnFirst.addEventListener('click', function a(event): void {
      event.preventDefault();
      slidePage.style.marginLeft = '-25%';
      bullet[current - 1].classList.add('active');
      progressCheck[current - 1].classList.add('active');
      progressText[current - 1].classList.add('active');
      current += 1;
    });
    nextBtnSec.addEventListener('click', function b(event): void {
      event.preventDefault();
      slidePage.style.marginLeft = '-50%';
      bullet[current - 1].classList.add('active');
      progressCheck[current - 1].classList.add('active');
      progressText[current - 1].classList.add('active');
      current += 1;
    });

    nextBtnThird.addEventListener('click', function c(event): void {
      event.preventDefault();
      slidePage.style.marginLeft = '-75%';
      bullet[current - 1].classList.add('active');
      progressCheck[current - 1].classList.add('active');
      progressText[current - 1].classList.add('active');
      current += 1;
    });
    submitBtn.addEventListener('click', function d(): void {
      bullet[current - 1].classList.add('active');
      progressCheck[current - 1].classList.add('active');
      progressText[current - 1].classList.add('active');
      current += 1;
      setTimeout(function p(): void {
        alert('Your Form Successfully Signed up');
      }, 800);
    });

    prevBtnSec.addEventListener('click', function e(event): void {
      event.preventDefault();
      slidePage.style.marginLeft = '0%';
      bullet[current - 2].classList.remove('active');
      progressCheck[current - 2].classList.remove('active');
      progressText[current - 2].classList.remove('active');
      current -= 1;
    });
    prevBtnThird.addEventListener('click', function f(event): void {
      event.preventDefault();
      slidePage.style.marginLeft = '-25%';
      bullet[current - 2].classList.remove('active');
      progressCheck[current - 2].classList.remove('active');
      progressText[current - 2].classList.remove('active');
      current -= 1;
    });

    prevBtnFourth.addEventListener('click', function g(event): void {
      event.preventDefault();
      slidePage.style.marginLeft = '-50%';
      bullet[current - 2].classList.remove('active');
      progressCheck[current - 2].classList.remove('active');
      progressText[current - 2].classList.remove('active');
      current -= 1;
    });
  }
}

import { Component, OnInit } from '@angular/core';

interface Dog {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dogsapi',
  templateUrl: './dogsapi.component.html',
  styleUrls: ['./dogsapi.component.css']
})
export class DogsapiComponent {

  dogs: Dog[] = [
    {value: 'boxer', viewValue: 'Boxer'},
    {value: 'dingo', viewValue: 'Dingo'},
    {value: 'chow', viewValue: 'Chow-Chow'},
    {value: 'bulldog', viewValue: 'Bulldog'},
    {value: 'doberman', viewValue: 'Doberman'},
    {value: 'labrador', viewValue: 'Labrador'},
    {value: 'pug', viewValue: 'Pug'},
    {value: 'husky', viewValue: 'Husky'}
  ];

  selectedDog = this.dogs[5].value;

  // tslint:disable-next-line:typedef
  httpGet(theUrl: string) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

  // tslint:disable-next-line:typedef
  getRandomImage() {
    const json = this.httpGet('https://dog.ceo/api/breed/' + this.selectedDog + '/images/random');
    console.log(json);

    const array = JSON.parse(json);
    console.log(array);

    const url = array.message;
    console.log(url);

    const image = document.getElementById('dogImage') as HTMLImageElement;

    image.src = url;
  }

}

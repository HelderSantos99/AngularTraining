import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

interface Iva {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-taxas',
  templateUrl: './taxas.component.html',
  styleUrls: ['./taxas.component.css']
})
export class TaxasComponent {
  basevalue!: any;
  ivavalue?: number;
  ivas: Iva[] = [
    {value: 0.06, viewValue: '6% (Taxa Reduzida)'},
    {value: 0.13, viewValue: '13% (Taxa Intermédia)'},
    {value: 0.23, viewValue: '23% (Taxa Normal)'}
  ];

  selectedIva = this.ivas[0].value;

  calculateIVA(): void {
    this.ivavalue = (this.selectedIva) * (this.basevalue);
    console.log(this.ivavalue);
  }
}

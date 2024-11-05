import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Currency Converter';
  countries = [
    { name: 'United States', code: 'USD' },
    { name: 'Canada', code: 'CAD' },
    { name: 'Japan', code: 'JPY' },
    { name: 'Germany', code: 'EUR' },
    { name: 'Australia', code: 'AUD' },
    { name: 'Brazil', code: 'BRL' },
    { name: 'India', code: 'INR' },
    { name: 'France', code: 'EUR' },
    { name: 'South Africa', code: 'ZAR' },
    { name: 'Mexico', code: 'MXN' },
    { name: 'Egypt', code: 'EGP' }
  ];
  exchangeRates:any = {
    'USD': 1,     // Base currency
    'CAD': 1.39,
    'JPY': 152.11,
    'EUR': 0.92,
    'AUD': 1.52,
    'BRL': 5.77,
    'INR': 84.15,
    'ZAR': 17.51,
    'MXN': 20.14,
    'EGP': 49.07
  };
  amount: any = '';
  convertedAmount: number | null = null;
  fromCurrency:string='';
  toCurrency:string='';
  claculate_rate(){
    const fromRate = this.exchangeRates[this.fromCurrency];
    const toRate = this.exchangeRates[this.toCurrency];
    this.convertedAmount = (this.amount * (toRate / fromRate));
  }
  addUnderline(event: MouseEvent) {
    
    const anchor = event.target as HTMLAnchorElement;
    anchor.classList.add('underlined');
  }

}

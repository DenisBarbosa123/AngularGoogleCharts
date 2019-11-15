import { Component, OnInit } from '@angular/core';
import { Money } from '../money';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  newMoney: Money;
  moneys: Money[];
  myData = [['',0]];

  
  title = 'Money';
  type = 'LineChart';
  options = { };
  myColumnNames = ['Value', 'Valor'];
  width = 800;
  height = 600;
  flag : boolean = true;

  constructor() { }

  ngOnInit() {
    this.newMoney = new Money();
    this.moneys = [];
    
  }

  save() {
    if(this.flag == true){
      this.flag = false;
    }
    this.moneys.push(this.newMoney);
    this.myData.push([this.newMoney.date.toString(), this.newMoney.value]);
    this.myData = Object.assign([], this.myData);
    this.newMoney = new Money();
  }



}

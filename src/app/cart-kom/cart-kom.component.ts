import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-kom',
  templateUrl: './cart-kom.component.html',
  styleUrls: ['./cart-kom.component.css'],
})
export class CartKomComponent implements OnInit {
  TtlQty = 0;
  TotalQtySupFnc(count: number) {
    this.TtlQty += count;
  }

  TtlCost = 0;
  TotalCostSupFnc(cost: number) {
    this.TtlCost += cost;
  }

  constructor() {}

  ngOnInit(): void {}
}

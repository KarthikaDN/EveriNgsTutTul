import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { title } from 'process';

@Component({
  selector: 'cart-item-kom',
  templateUrl: './cart-item-kom.component.html',
  styleUrls: ['./cart-item-kom.component.css'],
})
export class CartItemKomComponent implements OnInit {
  ftitle = '';
  fdetail = '';
  fcost = 0;

  cartComponents = [
    {
      title: 'Paneer Pizza',
      detail: 'Paneer cheez double layer pan',
      cost: 300,
      iconCls: 'fa-regular fa-heart',
      iconFlag: false,
      count: 0,
    },
    {
      title: 'Paneer Burger',
      detail: 'Family Maharaja Size tripple layer cheez burger',
      cost: 100,
      iconCls: 'fa-regular fa-heart',
      iconFlag: false,
      count: 0,
    },
    {
      title: 'Paneer Role',
      detail: 'Wide role with double cheez role',
      cost: 50,
      iconCls: 'fa-regular fa-heart',
      iconFlag: false,
      count: 0,
    },
    {
      title: 'Masala Dosa',
      detail: 'Fried masala dosa with coconut chutney',
      cost: 10,
      iconCls: 'fa-regular fa-heart',
      iconFlag: false,
      count: 0,
    },
  ];

  @Output() TotalQtyFnc = new EventEmitter();
  @Output() TotalCostFnc = new EventEmitter();
  // @Output('TotalUnitCost') TotalUnitCost: number = 0;

  ngOnInit() {}

  iconClicked(title: string) {
    this.cartComponents.filter((obj) => {
      if (obj.title == title && obj.iconCls == 'fa-regular fa-heart') {
        obj.iconCls = 'fa-solid fa-heart';
      } else if (obj.title == title && obj.iconCls == 'fa-solid fa-heart') {
        obj.iconCls = 'fa-regular fa-heart';
      }
    });
  }

  IncCountFnc(sign: string, ind: number) {
    if (sign == '-' && this.cartComponents[ind].count > 0) {
      this.cartComponents[ind].count -= 1;
      this.TotalQtyFnc.emit(-1);
      this.TotalCostFnc.emit(-this.cartComponents[ind].cost);
    } else if (sign == '+' && this.cartComponents[ind].count < 10) {
      this.cartComponents[ind].count += 1;
      this.TotalQtyFnc.emit(1);
      this.TotalCostFnc.emit(this.cartComponents[ind].cost);
    }
  }

  addFlag = false;
  addNewItem() {
    this.addFlag = true;
  }

  addItemToTableFnc() {
    if (this.updateFlag) {
      const obj = {
        title: this.ftitle,
        detail: this.fdetail,
        cost: this.fcost,
        iconCls: 'fa-regular fa-heart',
        iconFlag: false,
        count: 0,
      };
      this.cartComponents[this.updInd] = obj;
      // this.addFlag = false;
      this.updateFlag = false;
      this.updTitle = '';
      this.updDetail = '';
      this.updCost = 0;
      this.ftitle = '';
      this.fcost = 0;
      this.fdetail = '';
      this.btnName = 'Add';
    } else if (this.ftitle != '' && this.fdetail != '' && this.fcost != 0) {
      const obj = {
        title: this.ftitle,
        detail: this.fdetail,
        cost: this.fcost,
        iconCls: 'fa-regular fa-heart',
        iconFlag: false,
        count: 0,
      };
      this.cartComponents.push(obj);
      this.addFlag = false;
      this.updateFlag = false;
      this.ftitle = '';
      this.fdetail = '';
      this.fcost = 0;
    } else {
      alert('Please fill all the fields!');
    }
  }
  btnName = 'Add';
  updateFlag = false;
  updTitle = '';
  updDetail = '';
  updCost = 0;
  updInd = 0;

  updateObj(ind: number) {
    this.updateFlag = true;
    this.btnName = 'Update';
    this.updInd = ind;
    this.updTitle = this.cartComponents[ind].title;
    this.updDetail = this.cartComponents[ind].detail;
    this.updCost = this.cartComponents[ind].cost;

    this.ftitle = this.updTitle;
    this.fcost = this.updCost;
    this.fdetail = this.updDetail;
  }

  UpdItemToTableFnc() {}

  deleteObj(ind: number) {
    this.cartComponents.splice(ind, 1);
  }

  constructor() {}

  // ngOnInit(): void {}
}

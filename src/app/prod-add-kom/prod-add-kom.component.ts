import { Component, OnInit } from '@angular/core';
import { PrdSvc } from '../prd-svc.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prod-add-kom',
  templateUrl: './prod-add-kom.component.html',
  styleUrls: ['./prod-add-kom.component.css'],
})
export class ProdAddKomComponent implements OnInit {
  // PrdTtl = '';
  // PrdDtl = '';
  // PrdAmt = 0;

  // item: any;
  // addPrdFnc() {
  //   this.item = {
  //     TtlVak: this.PrdTtl,
  //     DtlVak: this.PrdDtl,
  //     AmtVak: this.PrdAmt,
  //   };
  //   this.PrdSvcVar.PrdAryVar.push(this.item);
  //   this.PrdAmt = 0;
  //   this.PrdDtl = '';
  //   this.PrdTtl = '';
  // }
  constructor(public PrdSvcVar: PrdSvc, public bs: NgbModal) {}

  ngOnInit(): void {}
}

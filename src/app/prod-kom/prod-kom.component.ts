import { Component, OnInit } from '@angular/core';
import { PrdSvc } from '../prd-svc.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prod-kom',
  templateUrl: './prod-kom.component.html',
  styleUrls: ['./prod-kom.component.scss'],
})
export class ProdKomComponent implements OnInit {
  // PrdTtl: string = '';
  // PrdDtl: string = '';
  // PrdAmt: number = 0;
  NewItem = {
    TtlVak: '',
    DtlVak: '',
    AmtVak: 0,
  };
  addPrdFnc() {
    this.PrdSvcVar.PrdAryVar.push(this.NewItem);
    // this.PrdAmt = 0;
    // this.PrdDtl = '';
    // this.PrdTtl = '';
  }

  constructor(public PrdSvcVar: PrdSvc, public bootstrap: NgbModal) {}

  ngOnInit(): void {}
}

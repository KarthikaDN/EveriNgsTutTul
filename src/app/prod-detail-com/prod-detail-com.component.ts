import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrdSvc } from '../prd-svc.service';

@Component({
  selector: 'app-prod-detail-com',
  templateUrl: './prod-detail-com.component.html',
  styleUrls: ['./prod-detail-com.component.sass'],
})
export class ProdDetailComComponent implements OnInit {
  pthObj: any;
  constructor(public PrdSvcVar: PrdSvc, public UrlVap: ActivatedRoute) {
    var GetLnkVak = this.UrlVap.snapshot.params.NamVak;
    this.pthObj = this.PrdSvcVar.getItemByPath(GetLnkVak);
  }

  ngOnInit(): void {}
}

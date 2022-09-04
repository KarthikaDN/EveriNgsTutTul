import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PrdSvc {
  TtlVar = 'Dream Products';

  PrdAryVar = [
    {
      TtlVak: 'Benq GV1 projector',
      DtlVak: 'BoAt green color tiny portable pods',
      AmtVak: 25000,
    },
    {
      TtlVak: 'DJI camera',
      DtlVak: 'Old specs for budget',
      AmtVak: 9999,
    },
    {
      TtlVak: 'sneekers shoe',
      DtlVak: 'This is good and comfirtable for casual wears',
      AmtVak: 2500,
    },
    {
      TtlVak: 'mechanical keychrons',
      DtlVak: 'This makes wonderful sound',
      AmtVak: 12000,
    },
    {
      TtlVak: 'Noise Smart watch',
      DtlVak: 'Budget friendly Smart watch',
      AmtVak: 2500,
    },
  ];

  getItemByPath(PthPsgVar: string) {
    return this.PrdAryVar.find(
      (PrdItmVar) =>
        PrdItmVar.TtlVak.toLowerCase().split(' ').join('-') == PthPsgVar
    );
  }

  constructor() {}
}

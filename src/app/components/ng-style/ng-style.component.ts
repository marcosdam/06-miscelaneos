import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanyo">
      Hey Bro! Esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamanyo = tamanyo + 5">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>

    <button class="btn btn-secondary" (click)="tamanyo = tamanyo - 5">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamanyo: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}

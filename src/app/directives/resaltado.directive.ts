import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {
    console.log('Directiva llamada');
    el.nativeElement.style.backgroundColor = "orange";
  }

  @Input("appResaltado") nuevoColor: string;

  @HostListener('mouseenter') moseEntra(){
    this.resaltar( this.nuevoColor || 'yellow' )
  }

  @HostListener('mouseleave') moseSale(){
    this.resaltar( null );
  }

  private resaltar( color: string ){
    this.el.nativeElement.style.backgroundColor = "color";
  }

}

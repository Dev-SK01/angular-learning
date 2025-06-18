import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:true,
})

export class HighlightDirective {
  // input for the element
  @Input() userColor = '';
  constructor( private elem:ElementRef) { }
  
  // event interaction
  @HostListener('mouseenter') onMouseEnter(){
    this.hightlight(this.userColor || "yellow");
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hightlight('');
  }
  
  private hightlight(color:string){
      this.elem.nativeElement.style.backgroundColor = color;
  }
}

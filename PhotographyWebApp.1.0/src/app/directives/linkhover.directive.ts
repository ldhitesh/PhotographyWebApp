import { Directive, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[linkhighlighter]'
})
export class LinkhoverDirective {

  constructor(private eleref:ElementRef,private renderer:Renderer2) { }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.eleref.nativeElement,
      "color",
      "#C2C7CC"
    );
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.eleref.nativeElement,
      "color",
      "#ffffff"
    );
  }
}

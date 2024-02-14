import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private eleRef:ElementRef,private renderer:Renderer2){}
  public ismenuopen:string="none";

  activateHamburger(){
    const element=document.getElementById("navmenu");    
    if(element?.style.display=="")
      element.style.display="none";
    else if(element?.style.display=="none")
      element.style.display="";
  }
}

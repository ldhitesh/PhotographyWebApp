import { Component } from '@angular/core';

export interface Slide{
     imgSrc:string;
     imgAlt:string;
}

@Component({
  selector: 'display-area',
  templateUrl: './displayarea.component.html',
  styleUrls: ['./displayarea.component.css']
})
export class DisplayareaComponent {
    
    public selectedindex:any=0;

    public images:Slide[]=[
      {
        imgSrc:'../../assets/images/pic1.png',
        imgAlt:''
      },
      {
        imgSrc:'../../assets/images/pic2.png',
        imgAlt:''
      },
      {
        imgSrc:'../../assets/images/pic3.png',
        imgAlt:''
      },
      {
        imgSrc:'../../assets/images/pic4.png',
        imgAlt:''
      },
      {
        imgSrc:'../../assets/images/pic5.png',
        imgAlt:''
      }
    ];

    showprev(i:number){
      if(this.selectedindex>0)
        this.selectedindex=i-1;
    }

    shownext(i:number){
      if(this.selectedindex<this.images.length-1)
        this.selectedindex=i+1;
    }
}

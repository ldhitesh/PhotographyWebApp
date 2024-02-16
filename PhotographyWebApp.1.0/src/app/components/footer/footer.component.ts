import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public img_p:string="";
  public image_idx:number=1;

  constructor(){
    this.img_p="../../assets/images/pic1.png";

    setInterval(()=>{
      if(this.image_idx>=7){
        this.image_idx=1
      }
      else{
        this.img_p="../../assets/images/pic"+ this.image_idx.toString() +".png";
        this.image_idx+=1;
      }
    },3000);
  }

}



// public selectedindex:any=0;

//     public images:Slide[]=[
//       {
//         imgSrc:'../../assets/images/pic1.png',
//         imgAlt:''
//       },
//       {
//         imgSrc:'../../assets/images/pic2.png',
//         imgAlt:''
//       },
//       {
//         imgSrc:'../../assets/images/pic3.png',
//         imgAlt:''
//       },
//       {
//         imgSrc:'../../assets/images/pic4.png',
//         imgAlt:''
//       },
//       {
//         imgSrc:'../../assets/images/pic5.png',
//         imgAlt:''
//       }
//     ];

//     public im:any;

//     constructor(){
//       setInterval(()=>{
//           this.im=
//       },3000);
//     }

    // showprev(i:number){
    //   if(this.selectedindex>0)
    //     this.selectedindex=i-1;
    // }

    // shownext(i:number){
    //   if(this.selectedindex<this.images.length-1)
    //     this.selectedindex=i+1;
    // }
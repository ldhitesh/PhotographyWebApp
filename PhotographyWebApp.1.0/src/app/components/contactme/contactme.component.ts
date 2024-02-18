import { Component } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'contact-me',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {
  constructor(private modalservice:NgbModal){}

  contactFormData={
    fullname: '',
    emailid: '',
    subject: '',
    message: ''
  }

  openScrollableContent(contact_comp:any) {
		this.modalservice.open(contact_comp, { scrollable: false });
	}

  send(){
    this.contactFormData={
      fullname: '',
      emailid: '',
      subject: '',
      message: ''
    }
    this.modalservice.dismissAll();
  }
}
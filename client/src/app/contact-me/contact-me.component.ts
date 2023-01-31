import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  contactForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      message: new FormControl(""),
    })

    onSubmit(){
      console.warn(this.contactForm.value);
    }
}
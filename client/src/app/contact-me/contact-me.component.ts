import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required],
    })

    constructor(private fb: FormBuilder) { }

    onSubmit(){
      console.warn(this.contactForm.value);
    }
}
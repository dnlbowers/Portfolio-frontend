import { Component } from '@angular/core';
import { ContactForm } from '../_classes/contact-form';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

    reasons = ['Question', 'Hire me', 'Comment/Feedback', 'Other'];

    submitted = false;

    onSubmit(){
       this.submitted = true;
    }

}
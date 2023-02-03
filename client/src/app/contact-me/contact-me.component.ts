import { Component } from '@angular/core';
import { ContactForm } from '../_classes/contact-form';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

    reasons = ['Hire me', 'Question', 'Comment/Feedback', 'Other'];

    submitted = false;

    model = new ContactForm('', '', this.reasons[0], '');

    onSubmit(){
       this.submitted = true;
    }

}
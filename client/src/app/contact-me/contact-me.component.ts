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
    confirmed = false;
    sentToApi = false;
    processing = false;

    model = new ContactForm('', '', this.reasons[0], '');

    onSubmit(){
      this.submitted = true;
      this.processing = true;
      console.log(this.model);
      console.log(this.submitted)
    }

    editSubmission() {
      this.processing = false;
      this.submitted = false;
    }

    sendMessage() {
      this.confirmed = true;
      this.submitted = false;
      //logic to send to the api here

      // then only if api call successful these actions should be taken 
      this.sentToApi = true;
      this.model = new ContactForm('', '', this.reasons[0], '');
    }

    sendNewMessage() {
      this.processing = false;
      
      this.confirmed = false;
      this.sentToApi = false;
      
    }

}
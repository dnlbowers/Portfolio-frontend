import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../_classes/contact-form';
import { ContactRequestService } from '../_services/contact-request.service';


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

    constructor(private contactRequestService: ContactRequestService) { }

    // ngOnInit() {}

    onSubmit(){
      this.submitted = true;
      this.processing = true;
      
    }

    editSubmission() {
      this.processing = false;
      this.submitted = false;
    }

    sendMessage() {
      this.confirmed = true;
      this.submitted = false;
      //logic to send to the api here
      this.contactRequestService.SendContactRequest(this.model).subscribe({
        
        next: (result) => {
          console.log(result);
          this.sentToApi = true;
        },
        
        error: (error) => console.log(error),
        complete: () => console.log('completed')
      });
      // then only if api call successful these actions should be taken 
      
    }  

    sendNewMessage(): void {
      this.model = new ContactForm('', '', this.reasons[0], '');

      this.processing = false;
      
      this.confirmed = false;
      this.sentToApi = false;
      
    }

}
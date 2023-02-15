import { Component } from '@angular/core';
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
    showError= false;
    errorMessage: string = "";
    errorCode: number = 0;

    model = new ContactForm('', '', this.reasons[0], '');

    constructor(private contactRequestService: ContactRequestService) { }

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
      this.contactRequestService.SendContactRequest(this.model).subscribe({
        
        next: (result) => {
          console.log(result);
          this.sentToApi = true;
        },
        
        error: (error) => {
          console.log(error), 
          this.showError = true,
          this.errorCode = error.status, 
          this.errorMessage = error.statusText;
        },

        complete: () => {
          console.log('completed')
        }
      });
      
    }  

    sendNewMessage(): void {
      this.model = new ContactForm('', '', this.reasons[0], '');
      this.showError = false;
      this.processing = false;
      
      this.confirmed = false;
      this.sentToApi = false;
      
    }

}
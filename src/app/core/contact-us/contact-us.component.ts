import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  mailMessage = '';
  constructor(private mail: MailService) { }

  ngOnInit() {
  }

  onSubmitMail(formData) {
    this.mail.sendMail(formData).subscribe(data => {
      this.mailMessage = "Mail sent successfully";
    }, err => {
      this.mailMessage = 'Mail not sent due to some error';
    });
  }

}

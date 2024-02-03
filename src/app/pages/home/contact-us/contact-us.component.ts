import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { SUCCESS } from '../../constant/response-status.const';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactDetails: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getContactDetails();
  }

  getContactDetails() {
    this.authService.getContactDetails().subscribe((response) => {
      if (response?.status == SUCCESS) {
        this.contactDetails = response?.payload?.data;
        console.log('this.contactDetails', this.contactDetails);
      }
    }, (error) => {

    });
  }

  openTelegram() {
    window.open(this.contactDetails.telegram, '_blank');
  }

  openInstagram() {
    window.open(this.contactDetails.intagram, '_blank');
  }

  openWhatsApp() {
    window.open(`https://wa.me/${this.contactDetails.whatsapp}`, '_blank');
  }

  openEmail() {
    window.open(`mailto:${this.contactDetails.email}`, '_blank');
  }
}

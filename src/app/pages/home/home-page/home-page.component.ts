import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KycModalComponent } from '../kyc-modal/kyc-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(
    private router: Router,private modalService: NgbModal
  ) {}

  public playGame() {
    this.router.navigate(['/game-home']);
  }
  public kycModal() {
    const modalRef = this.modalService.open(KycModalComponent, {size:'md', windowClass: 'modal-dialog-centered'});
    // this.router.navigate(['/kyc']);
  }
}

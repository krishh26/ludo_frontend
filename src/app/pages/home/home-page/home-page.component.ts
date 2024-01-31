import { LocalStorageService } from './../../../services/local-storage/local-storage.service';
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
  loginUser : any;

  constructor(
    private localStorageService : LocalStorageService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.loginUser = this.localStorageService.getLogger();
  }

  public playGame() {
    if(this.loginUser) {
      this.router.navigate(['/home/game-home']);
    } else {
      this.router.navigate(['/login'])
    }
  }

  public kycModal() {
    const modalRef = this.modalService.open(KycModalComponent, {size:'md', windowClass: 'modal-dialog-centered'});
    // this.router.navigate(['/kyc']);
  }


}

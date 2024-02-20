import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-i-won',
  templateUrl: './i-won.component.html',
  styleUrls: ['./i-won.component.css']
})
export class IWonComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.closePopUp();
  }

  closePopUp(result?: any) {
    this.activeModal.close(result);
  }
}

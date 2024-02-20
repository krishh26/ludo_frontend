import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-i-loose',
  templateUrl: './i-loose.component.html',
  styleUrls: ['./i-loose.component.css']
})
export class ILooseComponent implements OnInit {


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

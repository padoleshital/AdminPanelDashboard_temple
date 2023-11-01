import { Component, OnInit, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

/* Components */

import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {

  updateUserForm: FormGroup;
  submitted1 = false;

  constructor(private modalService: NgbModal,
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) { }

  openDialog(ele: string) {
    this.dialog.open(AddEditUserComponent, {
      width: '500px', data: {
        type: ele,
      }
    });
  }

  ngOnInit(): void {
    this.updateUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
    })
  }


  get f1() {
    return this.updateUserForm.controls;
  }

  updateFormSubmit() {
    this.submitted1 = true;
    if (this.updateUserForm.invalid) {
      return
    }
  }

  viewUser(content) {
    this.modalService.open(content);
  }

  updateUser(content) {
    this.modalService.open(content);
  }

  deleteUser() {
    Swal.fire({
      title: 'Are you sure ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }
}
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  addUserForm: FormGroup;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public dialog: MatDialog) { }

  get f() {
    return this.addUserForm.controls;
  }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male', Validators.required],
      age: ['', Validators.required],
      profile: ['', this.data?.type == 'add' ? Validators.required : ''],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addUserForm.invalid) {
      return
    } else {
      this.dialog.closeAll();
    }
  }

}

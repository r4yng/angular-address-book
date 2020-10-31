import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: [''],
    email: [''],
    address1: [''],
    address2: [''],
    city: [''],
    state: ['', { validators: [Validators.minLength(2)] }],
    zipCode: [''],
    id: [''],
  });

  addOrEdit: 'Add' | 'Update';

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
    public dialogRef: MatDialogRef<AddContactComponent>
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
      this.addOrEdit = 'Update';
    } else {
      this.addOrEdit = 'Add';
    }
  }

  doAction() {
    this.dialogRef.close({
      action: this.addOrEdit,
      contactData: this.form.value,
    });
  }
}

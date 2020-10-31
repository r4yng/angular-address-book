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

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.newContact.value);
  //   if (this.addOrEdit === 'Add') {
  //     this.contactsService.add(this.newContact.value);
  //   } else if (this.addOrEdit === 'Update') {
  //     this.contactsService.update({ id: this.data.id, ...this.newContact.value } as Contact);
  //   }
  // }

  doAction() {
    this.dialogRef.close({
      action: this.addOrEdit,
      contactData: this.form.value,
    });
  }
}

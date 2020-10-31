import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { Contact } from 'src/models/contact';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { ContactsService } from '../contacts.service';
import { ContactsDataSource } from './contacts.datasource';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['firstName', 'lastName', 'actions'];
  dataSource = new ContactsDataSource(this.contactsService);
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private contactsService: ContactsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe((sort: Sort) => this.loadContacts());
  }

  loadContacts() {
    this.dataSource.loadContacts(this.sort?.active, this.sort?.direction);
  }

  openAddEditDialog(contact?: Contact): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      width: '500px',
      data: contact,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      const { action, contactData } = result;
      if (action === 'Add') {
        this.dataSource.addContact(contactData);
        console.log(action + ' ' + JSON.stringify(contactData));
      } else if (action === 'Update') {
        this.dataSource.updateContact(contactData);
      }
    });
  }

  deleteContact(id: string): void {
    this.dataSource.deleteContact(id);
  }
}

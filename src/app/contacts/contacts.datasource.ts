import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { SortDirection } from '@angular/material/sort/public-api';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from 'src/models/contact';
import { ContactsService } from '../contacts.service';

export class ContactsDataSource extends DataSource<any> {
  private contactsSubject = new BehaviorSubject<Contact[]>([]);

  constructor(private contactsService: ContactsService) {
    super();
  }

  connect(): Observable<Contact[]> {
    return this.contactsSubject.asObservable();
  }
  disconnect() {}

  loadContacts(sortField: string, sortDirection: SortDirection) {
    this.contactsService
      .getContacts(sortField, sortDirection)
      .pipe(catchError(() => of([])))
      .subscribe((contacts) => this.contactsSubject.next(contacts));
  }

  deleteContact(id: string) {
    this.contactsService.delete(id).subscribe((res) => {
      if (res === 'DELETED') {
        const contactsRemoved = this.contactsSubject.value.filter(
          (contact) => contact.id !== id
        );
        this.contactsSubject.next(contactsRemoved);
      }
    });
  }

  updateContact(contact: Contact) {
    this.contactsService.update(contact);
  }

  addContact(contact: Contact) {
    this.contactsService.add(contact).subscribe((res) => {
      if (res === 'ADDED') {
        this.contactsSubject.next([...this.contactsSubject.value, contact]);
      }
    });
  }
}

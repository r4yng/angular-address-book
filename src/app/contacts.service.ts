import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Contact } from 'src/models/contact';
import { SortDirection } from '@angular/material/sort/public-api';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  // initialize with some fake contacts
  private contacts: Contact[] = [
    {
      id: '6b74b59e-5696-465d-befe-4907bc5cc2d7',
      firstName: 'Barris',
      lastName: 'MacCard',
      phone: '410-412-8884',
      email: 'bmaccard0@smugmug.com',
      address1: '99 Parkside Terrace',
      city: 'Baltimore',
      state: 'Maryland',
      zipCode: '21282',
    },
    {
      id: 'b8fcc4c6-e3a4-4ebc-b7b2-5a001323171c',
      firstName: 'Edithe',
      lastName: 'Goodship',
      phone: '714-798-4613',
      email: 'egoodship1@vistaprint.com',
      address1: '849 Green Junction',
      city: 'San Jose',
      state: 'California',
      zipCode: '95128',
    },
    {
      id: '3025affa-bcdf-4140-9d69-0fed1801fc44',
      firstName: 'Coral',
      lastName: 'Divill',
      phone: '518-356-1146',
      email: 'cdivill2@irs.gov',
      address1: '58324 Sunfield Drive',
      city: 'Albany',
      state: 'New York',
      zipCode: '12222',
    },
    {
      id: 'e6cf17bf-54a4-4ebb-af31-2ddb7d5205d0',
      firstName: 'Dalton',
      lastName: 'Whall',
      phone: '757-233-4416',
      email: 'dwhall3@ftc.gov',
      address1: '442 Darwin Plaza',
      city: 'Newport News',
      state: 'Virginia',
      zipCode: '23612',
    },
    {
      id: 'cff75d74-2fc4-465e-b723-7adb4cb1d048',
      firstName: 'Neal',
      lastName: 'Jendrys',
      phone: '971-505-2205',
      email: 'njendrys4@sohu.com',
      address1: '118 Dunning Lane',
      city: 'Portland',
      state: 'Oregon',
      zipCode: '97271',
    },
    {
      id: '7f972ea2-4501-4795-8535-1eec03e11ea3',
      firstName: 'Lorie',
      lastName: 'Avrahamof',
      phone: '520-331-4999',
      email: 'lavrahamof5@theglobeandmail.com',
      address1: '78769 Crescent Oaks Junction',
      city: 'Tucson',
      state: 'Arizona',
      zipCode: '85748',
    },
    {
      id: 'fc20b8df-5ecf-4061-ac62-42094d287ad4',
      firstName: 'Filip',
      lastName: 'Point',
      phone: '540-729-3744',
      email: 'fpoint6@g.co',
      address1: '46 Crownhardt Junction',
      city: 'Roanoke',
      state: 'Virginia',
      zipCode: '24009',
    },
    {
      id: '04451636-d9ef-4ce7-94d6-73b51ff2419b',
      firstName: 'Celesta',
      lastName: 'MacNamee',
      phone: '719-644-3235',
      email: 'cmacnamee7@hc360.com',
      address1: '48417 Dakota Avenue',
      city: 'Pueblo',
      state: 'Colorado',
      zipCode: '81015',
    },
    {
      id: '55d15b42-cf09-45a7-816e-66105d144241',
      firstName: 'Wilhelmine',
      lastName: 'Veck',
      phone: '352-215-9739',
      email: 'wveck8@wikia.com',
      address1: '7515 Roth Crossing',
      city: 'Brooksville',
      state: 'Florida',
      zipCode: '34605',
    },
    {
      id: 'b06e4081-4623-49ca-9bab-a8ce1508ed34',
      firstName: 'Tanya',
      lastName: 'Webbe',
      phone: '806-883-7312',
      email: 'twebbe9@businesswire.com',
      address1: '551 Starling Road',
      city: 'Amarillo',
      state: 'Texas',
      zipCode: '79171',
    },
    {
      id: '53da0a34-f326-4977-9964-57e958ba3907',
      firstName: 'Tadeas',
      lastName: 'Skittle',
      phone: '281-401-1075',
      email: 'tskittlea@cafepress.com',
      address1: '470 Monterey Circle',
      city: 'Houston',
      state: 'Texas',
      zipCode: '77030',
    },
    {
      id: 'e7b0a31d-9014-4598-925e-8413fcd59fa8',
      firstName: 'Marcy',
      lastName: 'Rahill',
      phone: '702-530-5160',
      email: 'mrahillb@taobao.com',
      address1: '01 Fisk Terrace',
      city: 'North Las Vegas',
      state: 'Nevada',
      zipCode: '89036',
    },
    {
      id: 'c394bf97-ad6f-47f8-93ed-9254825b3008',
      firstName: 'Ezechiel',
      lastName: 'Mohring',
      phone: '309-172-4418',
      email: 'emohringc@sphinn.com',
      address1: '407 Laurel Center',
      city: 'Carol Stream',
      state: 'Illinois',
      zipCode: '60351',
    },
    {
      id: '6d481f38-9a78-45f9-b2b0-884453737b47',
      firstName: 'Lena',
      lastName: 'Longshaw',
      phone: '513-761-0570',
      email: 'llongshawd@slideshare.net',
      address1: '2069 Iowa Plaza',
      city: 'Cincinnati',
      state: 'Ohio',
      zipCode: '45213',
    },
    {
      id: 'f2ae72e2-cb25-4f7b-8360-59e93e3fa0d4',
      firstName: 'Ediva',
      lastName: 'Broadbere',
      phone: '316-764-6042',
      email: 'ebroadberee@columbia.edu',
      address1: '4 Lakewood Gardens Trail',
      city: 'Wichita',
      state: 'Kansas',
      zipCode: '67230',
    },
    {
      id: 'a0554bf5-f2d8-487f-8f06-a8ebb4ee92db',
      firstName: 'Livvie',
      lastName: 'Redborn',
      phone: '661-850-0774',
      email: 'lredbornf@netvibes.com',
      address1: '98 Farmco Street',
      city: 'Van Nuys',
      state: 'California',
      zipCode: '91411',
    },
    {
      id: '82d43a7c-4918-492f-8d37-1e7d1dd3b0be',
      firstName: 'Jaye',
      lastName: 'Ruslinge',
      phone: '202-683-1544',
      email: 'jruslingeg@example.com',
      address1: '0375 5th Crossing',
      city: 'Washington',
      state: 'District of Columbia',
      zipCode: '20535',
    },
    {
      id: 'ffdc09cb-85e1-4409-a846-ba06b03d47d0',
      firstName: 'Kevina',
      lastName: 'Ferriman',
      phone: '203-451-8801',
      email: 'kferrimanh@pbs.org',
      address1: '878 Ridge Oak Circle',
      city: 'Stamford',
      state: 'Connecticut',
      zipCode: '06905',
    },
    {
      id: 'aa9321b4-a114-4418-bd23-46ff155cfdac',
      firstName: 'Kyrstin',
      lastName: 'Spenceley',
      phone: '786-814-5960',
      email: 'kspenceleyi@dagondesign.com',
      address1: '33 Manley Avenue',
      city: 'Miami',
      state: 'Florida',
      zipCode: '33129',
    },
    {
      id: '318307c4-48dc-4ea1-9dd3-16fbf4f70aab',
      firstName: 'Casey',
      lastName: 'Colley',
      phone: '520-308-3623',
      email: 'ccolleyj@is.gd',
      address1: '6 Lukken Junction',
      city: 'Tucson',
      state: 'Arizona',
      zipCode: '85720',
    },
  ];

  constructor() {}

  /** gets from the defined contacts and wrap in observable to simulate asynchronous calls */
  getContacts(sortField: string, sortDirection: SortDirection) {
    if (!sortField && !sortDirection) {
      return of(this.contacts);
    } else {
      const cloneContacts = [...this.contacts].sort((a, b) =>
        a[sortField].toString().localeCompare(b[sortField])
      );
      if (sortDirection === 'desc') {
        return of(cloneContacts.reverse());
      }
      return of(cloneContacts);
    }
  }

  add(contactValues: Contact) {
    const newContact = { ...contactValues, id: uuidv4() };
    this.contacts.push(newContact);
    return of('ADDED');
  }

  update(updatedContact: Contact) {
    let contact = this.contacts.find(
      (contact) => contact.id === updatedContact.id
    );
    if (contact) {
      contact.firstName = updatedContact.firstName;
      contact.lastName = updatedContact.lastName;
      contact.phone = updatedContact.phone;
      contact.email = updatedContact.email;
      contact.address1 = updatedContact.address1;
      contact.address2 = updatedContact.address2;
      contact.city = updatedContact.city;
      contact.state = updatedContact.state;
      contact.zipCode = updatedContact.zipCode;
    }
  }

  delete(contactId: string) {
    this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
    return of('DELETED');
  }
}

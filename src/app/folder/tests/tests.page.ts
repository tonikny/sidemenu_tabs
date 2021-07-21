import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { TestsService } from './services/tests.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Contacts, Contact, ContactField, ContactName, ContactFindOptions } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {

  text = 'Hola';
  imgurl = 'https://www.publicdomainpictures.net/pictures/250000/velka/eye-chart-test-vintage.jpg';
  link = 'https://www.publicdomainpictures.net/pictures/250000/velka/eye-chart-test-vintage.jpg';
  contact: Contact;
  myContacts: Contact[];

  constructor(
    private commonService: CommonService,
    private testsService: TestsService,
    private socialSharing: SocialSharing,
    private contacts: Contacts
  ) {}

  ngOnInit() {
    this.commonService.setTitle('Tests');
    this.workWithContacts();
    // this.testCors();
  }

  testCors() {
    this.testsService.getCatastroStuff().subscribe((result) => {
      console.log(result);
    });
  }

  shareGeneric(parameter){
    const url = this.link;
    const text = parameter+'\n';
    this.socialSharing.share(text, 'MEDIUM', null, url);
  }

  onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
  }

  onError(contactError) {
      alert('onError!');
  }

  workWithContacts() {
    const options = {
      filter: 'Jordi',
      multiple: true,
      hasPhoneNumber: true
    };

    /*
    navigator.contacts.fieldType.addresses
    navigator.contacts.fieldType.birthday
    navigator.contacts.fieldType.categories
    navigator.contacts.fieldType.country
    navigator.contacts.fieldType.department
    navigator.contacts.fieldType.displayName
    navigator.contacts.fieldType.emails
    navigator.contacts.fieldType.familyName
    navigator.contacts.fieldType.formatted
    navigator.contacts.fieldType.givenName
    navigator.contacts.fieldType.honorificPrefix
    navigator.contacts.fieldType.honorificSuffix
    navigator.contacts.fieldType.id
    navigator.contacts.fieldType.ims
    navigator.contacts.fieldType.locality
    navigator.contacts.fieldType.middleName
    navigator.contacts.fieldType.name
    navigator.contacts.fieldType.nickname
    navigator.contacts.fieldType.note
    navigator.contacts.fieldType.organizations
    navigator.contacts.fieldType.phoneNumbers
    navigator.contacts.fieldType.photos
    navigator.contacts.fieldType.postalCode
    navigator.contacts.fieldType.region
    navigator.contacts.fieldType.streetAddress
    navigator.contacts.fieldType.title
    navigator.contacts.fieldType.urls
    */

    this.contacts.find(['displayName'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
      alert('Contacts: ' + contacts.toString());
    });
  }

}

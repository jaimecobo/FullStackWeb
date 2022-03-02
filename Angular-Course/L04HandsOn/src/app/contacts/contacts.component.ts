import { Component, OnInit } from '@angular/core';
import { emit } from 'process';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  dataService: SkillsService;
  dataService01: ContactsService;


  constructor(private contactsService: ContactsService) { 
    this.dataService01 = contactsService;
    
  }

  ngOnInit() {
    this.contacts = this.dataService01.contacts;
  }

}

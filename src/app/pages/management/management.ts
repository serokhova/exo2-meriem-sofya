import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './management.html',
  styleUrls: ['./management.scss']
})
export class ManagementComponent implements OnInit {
  lastContact: any = null;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.lastContact = this.contactService.getLastContact();
  }
}
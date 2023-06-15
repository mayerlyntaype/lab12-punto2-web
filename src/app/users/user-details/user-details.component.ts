import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() userId: number | undefined;

  userDetails = [
    { 
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@example.com',
      phone: '1234567890',
      city: 'Ciudad de México',
      country: 'México',
      age: 30
    },
    { 
      id: 2,
      name: 'María González',
      email: 'maria@example.com',
      phone: '9876543210',
      city: 'Buenos Aires',
      country: 'Argentina',
      age: 25
    },
    { 
      id: 3,
      name: 'Pedro Fernández',
      email: 'pedro@example.com',
      phone: '5678901234',
      city: 'Madrid',
      country: 'España',
      age: 35
    }
  ];

  getUserDetails(): any {
    return this.userDetails.find(user => user.id === this.userId);
  }
}

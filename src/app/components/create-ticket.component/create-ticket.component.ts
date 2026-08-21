import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ticket } from '../../types/ticket-type.interface';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-create-ticket',
  styleUrl: './create-ticket.component.css',
  templateUrl: './create-ticket.component.html',
})
export class CreateTicketComponent {
  createdticket=output<Ticket>();
  createTicketForm = new FormGroup({
    name : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    price : new FormControl(0, Validators.required),
    quantity : new FormControl(0, Validators.required),
    dateBeginning : new FormControl(new Date(), Validators.required),
    dateEnd : new FormControl(new Date(), Validators.required),
  });
  submitTicket(){}
}

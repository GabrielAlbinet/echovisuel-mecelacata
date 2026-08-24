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
    price : new FormControl(0, Validators.min(0.50)),
    quantity : new FormControl(0, Validators.min(0)),
    dateBeginning : new FormControl('', Validators.required),
    dateEnd : new FormControl('', Validators.required),
  });
  dateCompare = new Date().getTime();
  submitTicket(){
    if(this.createTicketForm.controls.name.value != null &&
      this.createTicketForm.controls.description.value != null &&
      this.createTicketForm.controls.price.value != null &&
      this.createTicketForm.controls.quantity.value != null &&
      this.createTicketForm.controls.dateBeginning.value != null &&
      this.createTicketForm.controls.dateEnd.value != null &&
      this.createTicketForm.controls.dateBeginning.value <= this.createTicketForm.controls.dateEnd.value
    ){
      if(this.createTicketForm.controls.quantity.value == 0){
        this.createdticket.emit({
        name : this.createTicketForm.controls.name.value,
        description : this.createTicketForm.controls.description.value,
        price : this.createTicketForm.controls.price.value,
        quantity : this.createTicketForm.controls.quantity.value,
        available : false,
        condition : `Validité : ${this.createTicketForm.controls.dateBeginning.value} au ${this.createTicketForm.controls.dateEnd.value}`,
      });
      }else{
        this.createdticket.emit({
        name : this.createTicketForm.controls.name.value,
        description : this.createTicketForm.controls.description.value,
        price : this.createTicketForm.controls.price.value,
        quantity : this.createTicketForm.controls.quantity.value,
        available : true,
        condition : `Validité : ${this.createTicketForm.controls.dateBeginning.value} au ${this.createTicketForm.controls.dateEnd.value}`,
      });
      }
  }
}
}

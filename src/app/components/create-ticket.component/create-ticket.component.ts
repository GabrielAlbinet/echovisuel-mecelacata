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
  dateToday = new Date();
  yesterday = new Date(this.dateToday);

  submitTicket(){
    this.yesterday.setDate(this.dateToday.getDate() -1);
    if(this.checkCondition() && this.checkDate()){
      let isAvailable = this.createTicketForm.controls.quantity.value == 0 ? false : true;
      this.createdticket.emit({
      name : this.createTicketForm.controls.name.value?this.createTicketForm.controls.name.value:"",
      description : this.createTicketForm.controls.description.value?this.createTicketForm.controls.description.value:"",
      price : this.createTicketForm.controls.price.value?this.createTicketForm.controls.price.value:1,
      quantity : this.createTicketForm.controls.quantity.value?this.createTicketForm.controls.quantity.value:0,
      available : isAvailable,
      condition : `Validité : ${this.createTicketForm.controls.dateBeginning.value} au ${this.createTicketForm.controls.dateEnd.value}`,
      });
    }
  }

  checkCondition():Boolean{
    if(this.createTicketForm.controls.name.value==null||this.createTicketForm.controls.description.value==null||
      this.createTicketForm.controls.price.value==null||this.createTicketForm.controls.quantity.value==null ||
      this.createTicketForm.controls.dateBeginning.value==null || this.createTicketForm.controls.dateEnd.value==null){
        return false;
    }else{
      return true;
    }
  }

  checkDate():boolean{
    if(this.createTicketForm.controls.dateBeginning.value!=null && this.createTicketForm.controls.dateEnd.value!=null && 
      new Date(this.createTicketForm.controls.dateBeginning.value).getDate() <= new Date(this.createTicketForm.controls.dateEnd.value).getDate()){
        return new Date(this.createTicketForm.controls.dateBeginning.value).getTime()>this.yesterday.getTime()?true:false;
    }else {
      return false;
    }
  }
}

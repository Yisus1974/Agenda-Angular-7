import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/agenda.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styles: []
})


export class AgendaComponent implements OnInit {

  constructor(private service: AgendaService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
    form.resetForm();    
    this.service.formData = {
      AgendaId :0,
      Nombre :'',
      FechNac: '',
      Telefono :'',
      Celular :'',
      email :'',
      Direccion :'',
      Estatus :true
    }
  }

  onSubmit(form: NgForm){
    if(this.service.formData.AgendaId == 0)
      this.insertRecord(form);
    else
      this.UpdateRecord(form); 
  }

insertRecord(form: NgForm){
  this.service.postAgenda().subscribe(
    res => {
    this.resetForm(form)
    this.toastr.success('Guardado correcto', 'Se ha guardado un nuevo registro en la agenda.')
    this.service.refreshList();
  },
  err => {
    console.log(err)
  }
  )
}

UpdateRecord(form: NgForm){
  this.service.putAgenda().subscribe(
    res => {
    this.resetForm(form)
    this.toastr.info('Guardado correcto', 'Se ha actualizado el registro.')
    this.service.refreshList();
  },
  err => {
    console.log(err)
  }
  )
}

}

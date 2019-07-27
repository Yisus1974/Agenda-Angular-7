import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/agenda.service';
import { Agenda } from 'src/app/shared/agenda.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styles: []
})
export class AgendaListComponent implements OnInit {

  constructor(private service: AgendaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(ag: Agenda){
    const tmpfecha = ag.FechNac;
    const splitfechaTime = tmpfecha.split('T');
    const splitfecha = splitfechaTime[0].split('-')
    ag.FechNac = splitfecha[0] + '-' + splitfecha[1] + '-' + splitfecha[2];
    this.service.formData = Object.assign({},ag);
  }

  onDelete(AgendaId){
    if(confirm('Esta seguro de eliminar el registro?')){
    this.service.delAgenda(AgendaId)
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Borrado correcto','Se ha eliminado el registro.')
    },
      err => {
        console.log(err)
      });
    }
  }
}

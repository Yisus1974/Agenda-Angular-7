import { Injectable } from '@angular/core';
import { Agenda } from './agenda.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AgendaService {
formData:Agenda;
readonly rootURL = 'http://localhost:57740/api';
list : Agenda[];

  constructor(private http: HttpClient) { }

  postAgenda(){
    return this.http.post(this.rootURL + '/Agenda', this.formData);
  }

  putAgenda(){
    return this.http.put(this.rootURL + '/Agenda/' + this.formData.AgendaId, this.formData);
  }

  delAgenda(id: number){
    return this.http.delete(this.rootURL + '/Agenda/' + id);
  }

  refreshList(){
    return this.http.get(this.rootURL + '/Agenda')
    .toPromise()
    .then(
      res => this.list = res as Agenda[]
    )
  }

}

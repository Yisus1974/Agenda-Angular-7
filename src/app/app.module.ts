import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { AppComponent } from './app.component';
import { AgendasComponent } from './agendas/agendas.component';
import { AgendaComponent } from './Agendas/agenda/agenda.component';
import { AgendaListComponent } from './Agendas/agenda-list/agenda-list.component';
import { AgendaService } from './shared/agenda.service';

@NgModule({
  declarations: [
    AppComponent,
    AgendasComponent,
    AgendaComponent,
    AgendaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

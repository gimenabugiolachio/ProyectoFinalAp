import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './components/about/about.component';
import { ExperenciaComponent } from './components/experencia/experencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperenciaComponent,
    EducacionComponent,
    SkillsComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}

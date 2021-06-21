import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobInformationComponent } from './pages/job-information/job-information.component';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import {SearchJobsComponent} from "./pages/search-jobs/search-jobs.component";
import {AccountsettingsComponent} from "./pages/accountsettings/accountsettings.component";
import {ProfileStudentComponent} from "./pages/profile-student/profile-student.component";
import {ContratComponent} from "./pages/contrat/contrat.component";
import {InterviewsComponent} from "./pages/interviews/interviews.component";
import {ApprovedPostulantComponent} from "./pages/approved-postulant/approved-postulant.component";
import {JobNewComponent} from "./pages/job-new/job-new.component";

//Eliminar despues
import {PruebaComponent} from "./pages/prueba/prueba.component";

const routes: Routes = [
  {path:'jobs', component : SearchJobsComponent},
  {path:'jobs/:id', component: JobInformationComponent},
  {path:'postulation/job/:id', component: PostulationsComponent},
  {path:'account', component: AccountsettingsComponent},
  {path:':id/profile', component: ProfileStudentComponent},
  {path:'contrat', component: ContratComponent},
  {path:'job/interview/:id', component: InterviewsComponent},
  {path:'postulant/job/:id', component: ApprovedPostulantComponent},
  {path:'job/new', component: JobNewComponent},

  //Eliminar Despues
  {path:'prueba', component: PruebaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

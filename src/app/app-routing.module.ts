import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: "", component:HomePageComponent, title: "Dev-Bowers - Fullstack Developer" },
  { path: "portfolio", component: PortfolioComponent, title: "David Bowers - Portfolio Projects" },
  { path: "showcase/certifications", component: CertificationsComponent, title: "David Bowers - Professional Qualifications" },
  { path: "showcase/cv", component: CurriculumVitaeComponent, title: "David Bowers - CV" },
  { path: "contact", component: ContactMeComponent, title: "David Bowers - Contact Me" },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: '**', component: NotFoundComponent, pathMatch: "full" },
  // { path: "blog", component: PortfolioComponent, title: "DB - Developing Developer Journal Blog" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


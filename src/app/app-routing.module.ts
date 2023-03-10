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
  { path: "", component:HomePageComponent, data: { animation: 'HomePage'}, title: "David Bowers - Fullstack Developer" },
  { path: "portfolio", component: PortfolioComponent, data: { animation: 'portfolioPage' }},
  { path: "showcase/certifications", component: CertificationsComponent, data: { animation: 'qualificationsPage'}, title: "David Bowers - Professional Qualifications" },
  { path: "showcase/cv", component: CurriculumVitaeComponent, title: "David Bowers - CV" },
  { path: "contact", component: ContactMeComponent, data: { animation: 'contactPage'}, title: "David Bowers - Contact Me" },
  { path: 'not-found', component: NotFoundComponent, data: { animation: 'PageNotFound'}, title: "David Bowers - Page Not Found" },
  { path: 'server-error', component: ServerErrorComponent, data: { animation: 'ServerError'}, title: "David Bowers - Server Error" },
  { path: '**', component: NotFoundComponent, pathMatch: "full" },
  // { path: "blog", component: PortfolioComponent, title: "DB - Developing Developer Journal Blog" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


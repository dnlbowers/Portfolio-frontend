import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './certifications/certifications.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: "", component:HomePageComponent, title: "Dev-Bowers - Home"},
  { path: "portfolio", component: PortfolioComponent, title: "DB - Portfolio Projects" },
  { path: "showcase/certifications", component: CertificationsComponent, title: "DB - Professional Qualifications" },
  { path: "showcase/cv", component: CurriculumVitaeComponent, title: "DB - CV" },
  // { path: "blog", component: PortfolioComponent, title: "DB - Developing Developer Journal Blog" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

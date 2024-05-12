import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleColumnPageComponent } from './pages/single-column-page/single-column-page.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AnatomyComponent } from './pages/anatomy/anatomy.component';
import { GridsComponent } from './pages/grids/grids.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'single-column',
    component: SingleColumnPageComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'anatomy',
    component: AnatomyComponent,
  },
  {
    path: 'grid',
    component: GridsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

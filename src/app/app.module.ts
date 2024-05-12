import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { McbWebUiModule } from 'mcb-web-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleColumnPageComponent } from './pages/single-column-page/single-column-page.component';
import { AnatomyComponent } from './pages/anatomy/anatomy.component';
import { GridsComponent } from './pages/grids/grids.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SingleColumnPageComponent, AnatomyComponent, GridsComponent, LoginComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, McbWebUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

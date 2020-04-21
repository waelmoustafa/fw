import { AuthGuard } from './security/auth.guard';
import { ProductListComponent } from './security/product/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login.component';
import { CategoryListComponent } from './security/category/category-list.component';
import { FwModule } from 'src/fw/fw.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CountriesComponent } from './components/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountriesComponent,
    // Security Components
    ProductListComponent,
    CategoryListComponent,
    LoginComponent
    // End Security Components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Framework Module
    FwModule
  ],
  providers: [AuthGuard], // Security Module
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxVcardModule } from "ngx-vcard";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxVcardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

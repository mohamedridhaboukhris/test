import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

import { GalleryComponent } from './gallery/gallery.component';
import { DonateComponent } from './donate/donate.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    HowItWorksComponent,
    AboutComponent,
    BlogComponent,
    GalleryComponent,
    DonateComponent,
    BlogDetailsComponent,
    DashboardComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

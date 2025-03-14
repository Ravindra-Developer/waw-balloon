import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { BirthdayDecorationsComponent } from './birthday-decorations/birthday-decorations.component';
import { BabyShowerThemesComponent } from './baby-shower-themes/baby-shower-themes.component';
import { AnniversaryCelebrationsComponent } from './anniversary-celebrations/anniversary-celebrations.component';
import { OtherEventsComponent } from './other-events/other-events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    GalleryComponent,
    PrivacyPolicyComponent,
    BirthdayDecorationsComponent,
    BabyShowerThemesComponent,
    AnniversaryCelebrationsComponent,
    OtherEventsComponent,
    PageNotFoundComponent,
    TermsConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RatingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    CommonModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

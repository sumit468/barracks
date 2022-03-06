import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessoriesComponent } from './modules/accessories/accessories.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { LightsComponent } from './modules/lights/lights.component';
import { MaintenanceComponent } from './modules/maintenance/maintenance.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { ProtectionComponent } from './modules/protection/protection.component';
import { ShopComponent } from './modules/shop/shop.component';
import { ContactComponent } from './modules/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShopComponent,
    ProtectionComponent,
    MaintenanceComponent,
    LightsComponent,
    AccessoriesComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faInstagram, faShoppingCart, faCopyright);
  }
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './modules/accessories/accessories.component';
import { HomeComponent } from './modules/home/home.component';
import { LightsComponent } from './modules/lights/lights.component';
import { MaintenanceComponent } from './modules/maintenance/maintenance.component';
import { ProtectionComponent } from './modules/protection/protection.component';
import { ShopComponent } from './modules/shop/shop.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "protection",
    component: ProtectionComponent
  },
  {
    path: "maintenance",
    component: MaintenanceComponent
  },
  {
    path: "lights",
    component: LightsComponent
  },
  {
    path: "accessories",
    component: AccessoriesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

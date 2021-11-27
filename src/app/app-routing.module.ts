import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccessoriesComponent } from './modules/accessories/accessories.component';
import { HomeComponent } from './modules/home/home.component';
import { LightsComponent } from './modules/lights/lights.component';
import { MaintenanceComponent } from './modules/maintenance/maintenance.component';
import { ProtectionComponent } from './modules/protection/protection.component';
import { ShopComponent } from './modules/shop/shop.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      title: 'Home'
    },
  },
  {
    path: "shop",
    component: ShopComponent,
    data: {
      title: 'Shop'
    }
  },
  {
    path: "protection",
    component: ProtectionComponent,
    data: {
      title: 'Protection'
    }
  },
  {
    path: "maintenance",
    component: MaintenanceComponent,
    data: {
      title: 'Maintenance'
    }
  },
  {
    path: "lights",
    component: LightsComponent,
    data: {
      title: 'Lights'
    }
  },
  {
    path: "accessories",
    component: AccessoriesComponent,
    data: {
      title: 'Lights'
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

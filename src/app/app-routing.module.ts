import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashCodeComponent } from './components/hash-code/hash-code.component';
import { HomeComponent } from './components/home/home.component';
import { HuaweiComponent } from './components/huawei/huawei.component';
import { ReflectieComponent } from './components/reflectie/reflectie.component';
import { SolidComponent } from './components/solid/solid.component';

const routes: Routes = [
  { path: "huawei", component: HuaweiComponent},
  { path: "hash-code", component: HashCodeComponent},
  { path: "solid", component: SolidComponent},
  { path: "reflectie", component: ReflectieComponent},
  { path: "home", component: HomeComponent},
  { path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

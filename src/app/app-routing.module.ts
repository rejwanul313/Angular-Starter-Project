import { HarunComponent } from './harun/harun.component';
import { BulbulComponent } from './bulbul/bulbul.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaykatComponent } from './saykat/saykat.component';

const routes: Routes = [
  { path: 'saykat', component: SaykatComponent },
  { path: 'bulbul', component: BulbulComponent },
  { path: 'harun', component: HarunComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

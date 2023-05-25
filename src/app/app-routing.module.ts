import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './components/rating/rating.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

const routes: Routes = [
  { path: 'rating', component: RatingComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'daterange', component: DatepickerComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

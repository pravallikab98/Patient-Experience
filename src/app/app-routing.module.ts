import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AggregateDashbaordComponent } from './aggregate-dashbaord/aggregate-dashbaord.component';
import { PerformanceDashboardComponent } from './performance-dashboard/performance-dashboard.component';
import { StarRatingDashboardComponent} from './star-rating-dashboard/star-rating-dashboard.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'performance-dashbaord', component: PerformanceDashboardComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'aggregate-dashbaord', component: AggregateDashbaordComponent },
  { path: 'Star-rating-dashboard', component: StarRatingDashboardComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { FloatingbarchartComponent } from './floatingbarchart/floatingbarchart.component';
import { CylinderchartsComponent } from './cylindercharts/cylindercharts.component';
import { TriangleBarchartComponent } from './triangle-barchart/triangle-barchart.component';
import { BarchartFloatingComponent } from './barchartfloating/barchartfloating.component';
import { BarchartTriangleComponent } from './barchart-triangle/barchart-triangle.component';
import { CylinderbarsComponent } from './cylinderbars/cylinderbars.component';
import { PerformanceDashboardComponent } from './performance-dashboard/performance-dashboard.component';
import { BarChartAxisComponent } from './bar-chartAxis/bar-chartAxis.component';
import { AggregateDashbaordComponent } from './aggregate-dashbaord/aggregate-dashbaord.component';
import { StarRatingDashboardComponent } from './star-rating-dashboard/star-rating-dashboard.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';

import { RegisterComponent } from './register/register.component';


var firebaseConfig = {
  apiKey: "AIzaSyBCSIy12DpqoJX1JBZsz08g2QgNV30FoQU",
  authDomain: "my-first-project-ase-lab-5.firebaseapp.com",
  databaseURL: "https://my-first-project-ase-lab-5.firebaseio.com",
  projectId: "my-first-project-ase-lab-5",
  storageBucket: "my-first-project-ase-lab-5.appspot.com",
  messagingSenderId: "642327932662",
  appId: "1:642327932662:web:86244be3c4cf31c39786d7",
  measurementId: "G-6FPKE9MEWK"
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PerformanceDashboardComponent,
    BarChartComponent,
    CylinderchartsComponent,
    TriangleBarchartComponent,
    BarchartTriangleComponent,
    BarchartFloatingComponent,
    AggregateDashbaordComponent,
    BarChartAxisComponent,
    CylinderbarsComponent,
    FloatingbarchartComponent,
    StarRatingDashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import {RoutingModule} from './routing.module';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForecastPanelComponent } from './components/forecast-panel/forecast-panel.component';
import { TemperaturePanelComponent } from './components/temperature-panel/temperature-panel.component';
import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsPanelComponent } from './components/details-panel/details-panel.component';
import { ForecastChartComponent } from './components/forecast-chart/forecast-chart.component';
import { GeoPanelComponent } from './components/geo-panel/geo-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { BrowserXhr } from '@angular/http';
import { NgProgressBrowserXhr } from 'ngx-progressbar';
import { NgProgressModule } from 'ngx-progressbar';


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    ForecastPanelComponent,
    TemperaturePanelComponent,
    BoardComponent,
    LoginComponent,
    DetailsPanelComponent,
    ForecastChartComponent,
    GeoPanelComponent,
    DashboardComponent,
    WeatherWidgetComponent,
  ],

  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    JsonpModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGuI6ua0EVH8mH5UIfvhkT9kunOcEXLkw' //API KEY GEO GOOGle
    }),
    NgProgressModule

  ],
  providers: [CookieService, { provide: BrowserXhr, useClass: NgProgressBrowserXhr }],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
eliminar toastModule.forRoot

 { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import {AuthService} from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import {AdMobFree} from '@ionic-native/admob-free/ngx'
import {AdmobfreeService} from './services/admobfree.service';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MatExpansionModule,IonicStorageModule.forRoot(),HttpClientModule],
  providers: [AdMobFree, AuthService, AdmobfreeService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

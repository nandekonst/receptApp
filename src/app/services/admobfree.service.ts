import { Injectable } from '@angular/core';
import {AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free/ngx';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdmobfreeService {
  insterstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: true,
    autoShow: false,
    id: "ca-app-pub-1224054838861389~1911947271"
  }
  constructor(private admobFree:AdMobFree, public platform:Platform) { 
    platform.ready().then(() => {
      this.admobFree.interstitial.prepare().then(() =>{

      }).catch(e => console.log(e))
    });

    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare().then(() => {}).catch(e => console.log(e))
    })
    
  }
  showInterstitialAd(){
    this.admobFree.interstitial.isReady().then(() => {
      this.admobFree.interstitial.show().then(() => {

      }).catch(e => console.log(e));
    }).catch(e => console.log(console.log(e)))
  }
}

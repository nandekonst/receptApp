import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {HttpService} from '../services/http.service';
import {AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free/ngx'
import {AdmobfreeService} from '../services/admobfree.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  recipes = []


  constructor(public adMob: AdmobfreeService, private authService:AuthService, private http:HttpService) {
   
  }


  ngOnInit(){
   this.getRandomRecipe();
   /*setTimeout(() => {
     this.adMob.showInterstitialAd();
   }, 5000);*/
  }

  showInterstitalAd(){
    this.adMob.showInterstitialAd();
  }

  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.getRandomRecipe()

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getRandomRecipe(){
    this.authService.getRandomRecipe().subscribe(data =>
      this.getRandomRecipeSuccess(data),
      error => this.getRandomRecipeError(error)
      )
  }

  getRandomRecipeSuccess(data){
    this.recipes = data.meals;
    for (var ingredient of this.recipes) {
      console.log(ingredient.ex)
    }

  }
  getRandomRecipeError(error){
    
  }
  

}

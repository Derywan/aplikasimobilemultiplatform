import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MyproductPage } from '../myproduct/myproduct';
import { CovidinfoPage } from '../covidinfo/covidinfo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyproductPage;
  tab3Root = CovidinfoPage;

  constructor() {
  }

}

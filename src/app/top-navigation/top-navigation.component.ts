import { Component, OnInit, Input } from '@angular/core';
import { AppSharedDataService } from '../shared/app-shared-data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  @Input() title:string;
  constructor(private appData:AppSharedDataService) { }

  ngOnInit() {
    $(function(){
      console.log('ready zala.....');
      $('.menu-toggle').click(function(){
        
        //$('nav').toggleClass('active');
        //$('.sidenav').toggleClass('active');
      })
    })
  }

  closeNav() {
    console.log("close clicked...");
    //document.getElementById("mySidenav").style.width = "0";
    //$('.sidenav').css('width','0px');
    //$('.sidenav').toggleClass('inactive');
    $('.sidenav').css('width','0px');
  }

  toggleClick(){
    console.log('menu-toggle....');
    //$('.sidenav').toggleClass('active');
    $('.sidenav').css('width','250px');
    $("header").removeClass("fixed-top");
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public links: { path: string; title: string }[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.links = this.router.config
      .filter(route => !!route.data)
      .map(route => ({
        path: route.path,
        title: route.data.exercisesList.title,
      }));
  }
}

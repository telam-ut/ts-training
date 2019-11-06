import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from '../../models/exercise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public links: { path: string; title: string; allComplete: boolean }[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.links = this.router.config
      .filter(route => !!route.data)
      .map(route => ({
        path: route.path,
        title: route.data.exercisesList.title,
        allComplete: route.data.exercisesList.exercises.every(
          (exercise: Exercise) => exercise.isComplete(),
        ),
      }));
  }
}

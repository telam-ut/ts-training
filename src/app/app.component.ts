import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { exerciseLists } from '../exercises';
import { ExercisesPageComponent } from './exercises-page/exercises-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public constructor(router: Router) {
    exerciseLists.forEach(list => router.config.push({
      path: list.title.replace(/\s+/g, ''),
      component: ExercisesPageComponent,
      data: { exercisesList: list },
    }));
  }
}

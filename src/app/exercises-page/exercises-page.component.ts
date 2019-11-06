import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExerciseList } from '../../models/exercise-list';

@Component({
  templateUrl: './exercises-page.component.html',
})
export class ExercisesPageComponent implements OnInit {
  public exercisesList$: Observable<ExerciseList>;

  constructor(private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.exercisesList$ = this.route.data.pipe(
      map((data) => data.exercisesList),
    );
  }

  public isComplete(exerciseList: ExerciseList) {
    return exerciseList.exercises.every(list => list.isComplete());
  }
}

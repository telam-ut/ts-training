import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../../models/exercise';

@Component({
  selector: 'exercise',
  templateUrl: './exercise.component.html',
})
export class ExerciseComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor() { }

  ngOnInit(): void {
  }
}

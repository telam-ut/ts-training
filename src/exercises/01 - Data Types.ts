import { ExerciseList } from '../models/exercise-list';

export const dataTypesExercises: ExerciseList = {
  title: '01 - Data Types',
  exercises: [
    {
      title: 'Data Types',
      description: [
        'There are 7 basic data types in JavaScript:',
        '<strong>number</strong> for numbers of any kind: integer or floating-point.',
        '<strong>string</strong> for strings. A string may have one or more characters, there’s no separate single-character type.',
        '<strong>boolean</strong> for true/false.',
        '<strong>null</strong> for unknown values – a standalone type that has a single value null.',
        '<strong>undefined</strong> for unassigned values – a standalone type that has a single value undefined.',
        '<strong>object</strong> for more complex data structures.',
        '<strong>symbol</strong> for unique identifiers.',
      ],
      objective: 'Make <code>isCorrect</code> return <code>true</code>',
      isCorrect(): boolean {
        return false;
      },
    },
  ],
};

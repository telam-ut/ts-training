import { ExerciseList } from '../models/exercise-list';
import { code, codeBlock } from '../utils/code';

export const objectExercises: ExerciseList = {
  title: '04 - Objects',
  exercises: [{
    title: 'Objects',
    description: [
      'Objects in JavaScript are very similar to hashes in Ruby.',
      codeBlock(
        '# Ruby hash:',
        'person = { name: "Bob", age: 25, shoe_size: 9 }',
        '// JS object:',
        'let person = { name: "Bob", age: 25, shoe_size: 9 };',
      ),
      'You also access their values in similar, but not identical, ways:',
      codeBlock(
        '# Ruby hash:',
        'person[:age]',
        '=> 25',
        '// JS object:',
        'person.age;',
        '=> 25',
      ),
    ],
    objective: `Modify ${code('isComplete')} to return ${code('true')}`,
    isComplete(): boolean {
      return false;
    },
  }],
};
